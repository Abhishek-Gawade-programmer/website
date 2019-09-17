import React, { Fragment } from "react"

import { ResourcesLink } from "../components/ResourcesLink"
import { ResourcesList } from "../components/ResourcesList"
import { SEO } from "../components/SEO"

function ResourcesPage() {
  return (
    <Fragment>
      <SEO title="Resources" />
      <p>Welcome to the TPH resources.</p>
      <p>
        This is meant as a small knowledge base for commonly answered questions
        on our Discord community,{" "}
        <ResourcesLink to="/about">The Programmer's Hangout</ResourcesLink>.
      </p>
      <ResourcesList />
    </Fragment>
  )
}

export default ResourcesPage
