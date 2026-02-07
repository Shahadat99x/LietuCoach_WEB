import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 text-9xl font-bold text-violet-100">404</div>
      <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
        Op! (Oops!)
      </h1>
      <p className="mb-8 max-w-md text-lg text-neutral-600">
        Looks like you&apos;ve wandered off the path. Even the best travelers get lost sometimes.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="/" variant="outline">
          Go Home
        </Button>
        <Button href="https://play.google.com/store/apps/details?id=com.lietucoach.app">
          Start Learning Lithuanian
        </Button>
      </div>
    </div>
  );
}
