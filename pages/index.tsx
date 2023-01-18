import Layout from '@/layout'
import { Box, Container, Text } from '@/styles/components'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box padding='40px 16px'>
          <Text size={56} strong={true} align='center'>
            Welcome Next js / Typescript / Context API / Ant design / Restful API !!!
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}
