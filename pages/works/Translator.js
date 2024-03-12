import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Translator">
    <Container>
      <Title>
      Translator <Badge>2021-</Badge>
      </Title>
      <P>
      "Welcome to Translator, where language barriers dissolve at the click of a button, crafted with precision and care by a dedicated front-end developer."
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://shabhaizafar.github.io/Translator/">
          Translator <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/translator_01.png" alt="Translator" />
      <WorkImage src="/images/works/translator_02.png" alt="Translator" />
      <WorkImage src="/images/works/translator_03.png" alt="Translator" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
