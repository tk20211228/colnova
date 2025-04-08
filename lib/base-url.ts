import "server-only";

/**
 * ベースURLを取得
 * @param parentUrl 親フレームURL (開発環境でのみ使用)
 * @returns ベースURL
 * 参考URL　https://vercel.com/docs/projects/environment-variables/system-environment-variables
 * https://vercel.com/docs/projects/environment-variables/framework-environment-variables#framework-environment-variables
 */
export const getBaseURL = (parentUrl?: string) => {
  const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  // console.log("isProd", isProd);
  const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
  // console.log("isPreview", isPreview);
  const projectProductionUrl =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  // console.log("projectProductionUrl", projectProductionUrl);
  const vercelBranchUrl = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;
  // console.log("vercelBranchUrl", vercelBranchUrl);
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  // console.log("vercelUrl", vercelUrl);

  const url = isProd
    ? projectProductionUrl
    : isPreview
    ? vercelBranchUrl
    : vercelUrl;

  // console.log("url", url);

  return url
    ? `https://${url}`
    : parentUrl
    ? parentUrl
    : `http://localhost:${process.env.PORT || 3000}`;
};
