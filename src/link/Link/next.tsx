import React, { useMemo, ClassAttributes } from "react";
import { Text, View, ViewStyle, TextStyle } from "react-native";
import NextLink from "next/link";
import empty from "../../utils/empty";
import { NextProps, Web, LinkProps } from "./types";

/**
 * Link component for react-navigation and nextjs.
 *
 * @param props
 *  - routeName: string
 *  - params?: object
 *  - web?: `{ path?: string; as?: string, replace?: boolean, scroll?: boolean, prefetch?: boolean }`
 *
 * ## Usage
 *
 * ```diff
 * -import { Pressable } from 'react-native'
 * -...
 * -<Pressable onPress={() => navigate({ routeName: 'home' })}>
 * -  Press me!
 * - </Pressable>
 *
 * +import Link from 'next-rn/link'
 * + ...
 * +<Link routeName="home">
 * +  Press me!
 * +</Link>
 *```
 *
 */
const Link = React.forwardRef<Text | View, LinkProps<NextProps, Web>>(
  function Link(props, ref) {
    const {
      nextLinkProps = empty.object,
      style,
      params = empty.object,
      children,
      isText = true,
      web,
    } = props;
    const query = useMemo(() => ({ ...params }), [params]);
    const webPath = web?.path?.[0] === "/" ? web?.path?.slice(1) : web?.path;
    const pathname = `/${webPath ?? props.routeName}`;

    const href = useMemo(
      () => ({
        query,
        pathname,
      }),
      [pathname, query]
    );
    return (
      <NextLink
        passHref
        {...nextLinkProps}
        href={href}
        as={web?.as}
        prefetch={web?.prefetch}
        scroll={web?.scroll}
        replace={web?.replace}
        shallow={web?.shallow}
      >
        {isText ? (
          <Text ref={ref} accessibilityRole="link" style={style as TextStyle}>
            {children}
          </Text>
        ) : (
          <View accessibilityRole="link" style={style as ViewStyle}>
            {children}
          </View>
        )}
      </NextLink>
    );
  }
);

export default Link;
