import userApi from "../src/service/user"

export type Article = {
  title: string
  user: {
    name: string
    profile_image_url: string
    description: string
  }
}

export default function Home(props: { data: Article }) {
  const { data } = props
  // console.log(data)

  return (
    <div>
      <div key={data.title}>
        <p>{data.title}</p>
        <p>{data.user.name}</p>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const allData = await userApi.getAll()
  const data: Article = allData[0]
  return {
    props: {
      data: data,
    },
  }
}
