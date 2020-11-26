import { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient } from 'graphql-request'
import axios from 'axios'
import { getSdk } from './graphql/user.generated'

type RandomUser = {
  name: {
    first: string
    last: string
  }
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string)
const usersSdk = getSdk(client)

export const users = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const data = await usersSdk.Users()
      return res.status(200).json({ users: data.user })
    }

    case 'POST': {
      const { data } = await axios.get<{results: Array<RandomUser>}>('https://randomuser.me/api/')
      const randomUser = data.results[0]

      const response = await usersSdk.AddUser({
        object: {
          firstName: randomUser.name.first,
          lastName: randomUser.name.last,
        },
      })

      return res.status(200).json({ response })
    }

    default:
      return res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
