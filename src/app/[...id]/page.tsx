import Home from "../page";
import { useRouter } from "next/router";

export default function CatchAll() {

  return <Home />;
}

export const runtime = "edge";
