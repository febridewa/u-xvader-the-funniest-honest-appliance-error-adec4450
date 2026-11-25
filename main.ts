import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — a kettle's status log, written
// in its own flat, put-upon voice: it boiled the water, the human forgot
// it, it boiled the water again, and now both of them are tired. The
// "finally" is the kettle's whole grievance: it waited 28 minutes.
const LINE =
  "Water boiled at 06:12. You finally made tea at 06:40. I boiled it twice. We are both tired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
