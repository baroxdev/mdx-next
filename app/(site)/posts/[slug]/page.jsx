import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx'

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(rootDirectory)

  let paths = []

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '')
    paths.push({ params: { slug } })
  }

  return paths
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <section className='py-24'>
      <div className='container prose py-4'>{content}</div>
    </section>
  )
}

export default Page
