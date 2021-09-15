import { NavigateTo } from '../../router/use-routing/types'
import { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { Pressable, TextStyle } from 'react-native'
import Link from 'next/link'
// import { Pressable, TextStyle, ViewStyle } from 'react-native'

// export type LinkProps<To extends NavigateTo = NavigateTo> = To & {
//   /**
//    * Required: child component/text
//    */
//   children: React.ReactNode
//   /**
//    * Optional: props passed to next/router Link Component.
//    */
//   nextLinkProps?: ComponentPropsWithoutRef<typeof Link>
//   /**
//    * Optional: props passed to Pressable component on native.
//    */
//   PressableProps?: ComponentPropsWithoutRef<typeof Pressable>
//   style?: TextStyle | ViewStyle
// }

export type NextProps = {
  nextLinkProps?: React.ComponentPropsWithoutRef<typeof Link>
}
export type Web = {
  /**
   * Alternative path to override routeName on web.
   */
  path?: string
  /**
   * A custom URL ending to show in the browser address bar instead of the `web.path` or `routeName`.
   *
   * Should start with `/`.
   */
  as?: string
  /**
   * Prefetch the page in the background. Defaults to `true`
   */
  prefetch?: boolean
  /**
   * Scroll to the top of the page after a navigation. Defaults to `true`
   *
   */
  scroll?: boolean
  /**
   * Replace the current history state instead of adding a new url into the stack. Defaults to `false`
   */
  replace?: boolean
  /**
   * Update the path of the current page without rerunning getStaticProps, getServerSideProps or getInitialProps. Defaults to false
   */
  shallow?: boolean
}


export type LinkProps<
  ExtraProps extends object = {},
  Web extends object = {}, 
  //@ts-ignore
  Native extends object = Required<NavigateTo>['native'],
  Params extends object = {}
> = {
  /**
   * Required: child component/text
   */
  children: React.ReactNode
  /**
   * Optional: props passed to Pressable component on native.
   */
  PressableProps?: ComponentPropsWithoutRef<typeof Pressable>
  /**
   * Link text style
   */
  style?: TextStyle
  /**
   * Route name to navigate to
   */
  routeName: string
  /**
   * Navigation state parameters to pass to the screen you're navigating to.
   */
  params?: Params
  web?: Web
  /**
   * If false, it will not automatically wrap the children with a `Text` node.
   * This is useful if you want to use a link around something other than text.
   *
   * Default: `true`
   */
  isText?: boolean
  native?: Native
} & ExtraProps