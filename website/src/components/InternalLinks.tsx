import Link from '@docusaurus/Link'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface Props {
  readonly text: ReactNode
}

export const InternalLinks = {
  Selector: memo(({ text = 'selector' }) => (
    <Link
      to="/introduction/getting-started#selector-function"
      title="Selector Function"
    >
      {text}
    </Link>
  )),
  InputSelectors: memo(({ text = 'input selectors' }) => (
    <Link
      to="/introduction/getting-started#input-selectors"
      title="Input Selectors"
    >
      {text}
    </Link>
  )),
  OutputSelector: memo(({ text = 'output selector' }) => (
    <Link
      to="/introduction/getting-started#output-selector"
      title="Output Selector"
    >
      {text}
    </Link>
  )),
  ResultFunction: memo(({ text = 'result function' }) => (
    <Link
      to="/introduction/getting-started#result-function"
      title="Result Function"
    >
      {text}
    </Link>
  )),
  Dependencies: memo(({ text = 'dependencies' }) => (
    <Link to="/introduction/getting-started#dependencies" title="Dependencies">
      {text}
    </Link>
  )),
  CascadingMemoization: memo(({ text = 'Cascading Memoization' }) => (
    <Link
      to="/introduction/how-does-reselect-work#cascading-memoization"
      title="Cascading Memoization"
    >
      "{text}"
    </Link>
  )),
  OutputSelectorFields: memo(({ text = 'Output Selector Fields' }) => (
    <Link
      to="/api/createSelector#output-selector-fields"
      title="Output Selector Fields"
    >
      {text}
    </Link>
  )),
  CreateSelector: memo(() => (
    <Link to="/api/createSelector" title="createSelector">
      <code>createSelector</code>
    </Link>
  )),
  CreateSelectorCreator: memo(() => (
    <Link to="/api/createSelectorCreator" title="createSelectorCreator">
      <code>createSelectorCreator</code>
    </Link>
  )),
  LruMemoize: memo(() => (
    <Link to="/api/lruMemoize" title="lruMemoize">
      <code>lruMemoize</code>
    </Link>
  )),
  WeakMapMemoize: memo(() => (
    <Link to="/api/weakMapMemoize" title="weakMapMemoize">
      <code>weakMapMemoize</code>
    </Link>
  )),
  UnstableAutotrackMemoize: memo(() => (
    <Link to="/api/unstable_autotrackMemoize" title="unstable_autotrackMemoize">
      <code>unstable_autotrackMemoize</code>
    </Link>
  )),
  CreateStructuredSelector: memo(() => (
    <Link to="/api/createStructuredSelector" title="createStructuredSelector">
      <code>createStructuredSelector</code>
    </Link>
  )),
  TypedStructuredSelectorCreator: memo(() => (
    <Link
      to="/api/createStructuredSelector#typedstructuredselectorcreator-since-500"
      title="TypedStructuredSelectorCreator"
    >
      <code>TypedStructuredSelectorCreator</code>
    </Link>
  ))
} as const satisfies Record<string, FC<Props>>
