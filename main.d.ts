export declare function compile(
  filePath: string,
  outputDir: string,
  minify?: boolean
): Promise<import('bun').BuildOutput>;