// @ts-check
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  typescript: true,
  react: { utilities: ["@tanstack/query"] },
  testing: { utilities: ["testing-library"] },
});
