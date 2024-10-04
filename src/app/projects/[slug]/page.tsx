import { Metadata } from 'next'
import { fetchHygraphQuery } from '@/src/utils/fetch-hygraph-query'
import { ProjectPageData, ProjectsPageStaticData } from '@/src/@types/page-info'
import { ProjectDetails } from '@/src/components/pages/project/project-details'
import { ProjectSections } from '@/src/components/pages/project/project-sections'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (
  slug: string,
): Promise<ProjectPageData | null> => {
  const query = `
  query ProjectQuery($slug: String!) {
    project(where: {slug: $slug}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      section {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `
  const variables = { slug }

  try {
    const data = await fetchHygraphQuery<ProjectPageData>(
      query,
      1000 * 60 * 60 * 24, // 1 day
      variables,
    )
    return data
  } catch (error) {
    console.error('Error fetching project details:', error)
    throw error
  }
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const data = await getProjectDetails(slug)

  if (!data || !data.project) {
    return <p>Project not found</p>
  }

  const { project } = data

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.section} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
  query ProjectsSlugsQuery {
    projects(first: 100) {
      slug
    }
  }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)

  if (!data || !data.project) {
    return {
      title: 'Project not found',
    }
  }

  const { project } = data

  return {
    title: project.title,
    description: project.shortDescription.text,
    openGraph: {
      images: [
        {
          url: project.pageThumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
