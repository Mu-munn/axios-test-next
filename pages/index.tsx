import userApi from "../src/service/user"
import { Box, Center } from "@chakra-ui/react"

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
      {/* <a href='/api/auth/login'>Login</a> */}
      {/* <div key={data.title}>
        <p>{data.title}</p>
        <p>{data.user.name}</p>
      </div>

      <Center w={"100px"} h={"100px"} bg={"red.300"}>
        sample
      </Center> */}
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
