import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Validate the CRON_SECRET header or query param to ensure this request comes from an authorized source
  const authHeader = request.headers.get("x-cron-secret") || request.headers.get("authorization");
  const keyParam = request.nextUrl.searchParams.get("key");
  const cronSecret = process.env.CRON_SECRET;
  
  const isHeaderValid = authHeader === cronSecret || authHeader === `Bearer ${cronSecret}`;
  const isKeyValid = keyParam === cronSecret;

  if (!cronSecret || (!isHeaderValid && !isKeyValid)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { ok: false, error: "Missing Supabase configuration." },
      { status: 500 }
    );
  }

  try {
    // Attempt #1: Auth health check (fastest, rarely restricted)
    let authResponse;
    try {
      authResponse = await fetch(`${supabaseUrl}/auth/v1/health`, {
        method: "GET",
        headers: {
          apikey: supabaseAnonKey,
        },
      });

      if (authResponse.ok) {
        return NextResponse.json({
          ok: true,
          mode: "auth",
          ts: new Date().toISOString(),
        });
      }
    } catch (authErr) {
      // Ignored, will try rest fallback
    }

    // Attempt #2: REST root fallback
    let restResponse;
    try {
      restResponse = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: "GET",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      });

      if (restResponse.ok) {
        return NextResponse.json({
          ok: true,
          mode: "rest",
          ts: new Date().toISOString(),
        });
      }
    } catch (restErr) {
      // Ignored, will respond with both failures
    }

    return NextResponse.json(
      {
        ok: false,
        reason: `Both Auth Health and REST DB checks failed. Auth status: ${authResponse?.status || 'Error'}, REST status: ${restResponse?.status || 'Error'}`,
        ts: new Date().toISOString(),
      },
      { status: 502 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        reason: "Network error or failure during fetch.",
        ts: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
