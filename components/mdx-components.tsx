import { FC } from "react"
import { useMDXComponent } from "next-contentlayer/hooks"
import LzLink from "./UI/Link"
import QuickLinks from "./QuickLinks"
import Divider from "./Divider"
import CodeBlock from "./CodeBlock"
import AcceptPayments from "./AcceptPayments"
import ExploreDemo from "./ExploreDemo"
import WhatsNew from "./WhatsNew"
import ConnectCommunity from "./Connect"

/** Create a map of the HTML elements */
export const components: Record<string, FC<Record<string, any>>> = {
  QuickLinks({ children, ...props}){
    return (<QuickLinks {...props} />)
  },
  AcceptPayments({ children, ...props }){
    return <AcceptPayments {...props} />
  },
  ExploreDemo(){
    return <ExploreDemo />
  },
  WhatsNew(){
    return <WhatsNew />
  },
  ConnectCommunity(){
    return <ConnectCommunity />
  },
  Divider({ children, ...props}){
    return (<Divider {...props} />)
  },
  CodeBlock(props){
    return (<CodeBlock {...props} />)
  },
  Admonition(props) {
    return <div {...props} />
  },
  blockquote(props) {
    return <blockquote {...props} />
  },
  p(props){
    return <p className="paragraph-2 text-neu-800" {...props} />
  },
  h1(props) {
    return (
      <h1
        className="heading-3-b-sm break-keep-all lg:heading-3-b"
        id="skip-nav"
        tabIndex={-1}
        {...props}
      />
    )
  },
  h2(props) {
    return <h2 className="heading-5-s break-keep-all" {...props} />
  },
  h3(props) {
    return <h3 {...props} />
  },
  h4(props) {
    return <h4 {...props} />
  },
  pre(props) {
    return <pre {...props} className={`prose ${props.className}`} />
  },
  li(props) {
    return (
      <li {...props} />
    )
  },
  inlineCode(props) {
    return <code className="prose" {...props} />
  },
  code(props) {
    if (typeof props.children === "string") {
      return <components.inlineCode {...props} />
    }
    return <div className="prose">{props.children}</div>
  },
  a(props) {
    const href = props.href

    return (
      <LzLink to={href} passHref {...props}>
        {props.children}
      </LzLink>
    )
  },
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={components} />
}
