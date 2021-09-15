import * as React from "react";
import { Pressable, Text } from "react-native";
import NextLink from "next/link";
import { NextProps, Web, LinkProps } from "./types";
import useRouting from "../../router/use-routing";
import empty from "../../utils/empty";
import { useCallback } from "react";

// I made this an "HOC" of sorts to let us both use TS generics for each lib and React.forwardRef

/**
 * Example usage from expo-gatsby-navigation
 *
 * ```es6
 * import React from 'react'
 * import { LinkMaker, LinkProps } from 'expo-navigation-core'
 * import { Text } from 'react-native'
 * import { ExtraLinkProps, GatsbyWebProps } from './types'
 *
 * const Link = React.forwardRef(
 * (
 * 	props: LinkProps<ExtraLinkProps, GatsbyWebProps>,
 * 	ref?: React.Ref<Text>
 * ) => {
 * 	const Link = LinkMaker<ExtraLinkProps, GatsbyWebProps>()
 * 	return <Link {...props} ref={ref} />
 * }
 * )
 *
 * export default React.memo(Link)
 * ```
 */

const LinkMaker = <
  ExtraProps extends object = {},
  Web extends object = {},
  Params extends object = {}
>() =>
  React.forwardRef(
    (props: LinkProps<ExtraProps, Web, Params>, ref?: React.Ref<Text>) => {
      const { navigate } = useRouting();
      const {
        PressableProps = empty.object,
        routeName,
        params,
        children,
      } = props;

      const nav = useCallback(
        () =>
          navigate({
            routeName: routeName || "/",
            params,
          }),
        [navigate, routeName, params]
      );

      return (
        <Pressable {...PressableProps} onPress={nav}>
          <Text style={props.style} accessibiltyRole="link">
            {children}
          </Text>
        </Pressable>
      );
    }
  );

const Link = React.forwardRef<Text, LinkProps<NextProps, Web>>(function Link(
  props,
  ref
) {
  const L = LinkMaker<NextProps, Web>(); // we have to do this to be able to forward refs 🙃
  return <L {...props} ref={ref} />;
});

export default Link;