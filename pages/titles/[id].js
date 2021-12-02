import { data } from "../../utils/data"

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
    props: { id: id },
   }
}

function TitleDetail ({ id }) {
  const oneDetail = data.find((item) => {
    if (item.id == id)
    return item
  })
  return (
  <div>
    <h1>Title Details</h1>
    <p>Title- {oneDetail.title}</p>
    <p>Type- {oneDetail.type}</p>
    <p>Content- {oneDetail.content}</p>
  </div>
  )
}
export default TitleDetail