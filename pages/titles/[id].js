import { data } from "../../utils/data"
import { useMemo } from 'react'

// export paths
export const getStaticPaths = async() => {
  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

// pass props to TitleDetail
export const getStaticProps = async (context) => {
  const id = context.params.id
  return {
    props: { id },
   }
}

const getDetail = (n) => {
  const found = data.find(item => item.id == n)
  return found
}

function TitleDetail ({ id }) {
  //useMemo
  const detail = useMemo(() => getDetail(id), [id])

  return (
  <div>
    <h1>Title Details</h1>
    <p>Title- {detail.title}</p>
    <p>Type- {detail.type}</p>
    <p>Content- {detail.content}</p>
  </div>
  )
}
export default TitleDetail