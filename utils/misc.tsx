import Link, { type LinkProps } from "next/link";
import React from "react";

function getRequiredEnvVarFromObj(
  obj: Record<string, string | undefined>,
  key: string,
  devValue: string = `${key}-dev-value`
) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === "production") {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}

function getRequiredServerEnvVar(key: string, devValue?: string) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
const AnchorOrLink = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & {
    reload?: boolean;
    href?: LinkProps["href"];
  }
>(function AnchorOrLink(props, ref) {
  const { href, download, reload = false, children, ...rest } = props;
  let toUrl = "";
  let shouldUserRegularAnchor = reload || download;

  if (!shouldUserRegularAnchor && typeof href === "string") {
    shouldUserRegularAnchor = href.includes(":") || href.startsWith("#");
  }

  if (!shouldUserRegularAnchor && typeof href === "string") {
    toUrl = href;
    shouldUserRegularAnchor = href.includes(":");
  }

  if (shouldUserRegularAnchor) {
    return (
      <a {...rest} download={download} href={href ?? toUrl} ref={ref}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href ?? ""} {...rest} ref={ref}>
        {children}
      </Link>
    );
  }
});

export { AnchorOrLink, getRequiredServerEnvVar };
