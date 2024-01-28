import type { BuildOutput } from "bun";

/**
 * Builds a TypeScript file to a directory.
 * @param filePath The file path.
 * @param outputDir Directory to output the compiled file.
 * @param minify Whether or not to minify the compiled output. Useful for debugging.
 * @returns void
 */
export async function compile(
  filePath: string,
  outputDir: string,
  minify: boolean = true
): Promise<BuildOutput> {
  return await Bun.build({
    entrypoints: [filePath],
    outdir: outputDir,
    minify: minify,
  });
}
