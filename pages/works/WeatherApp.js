import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="WeatherApp">
    <Container>
      <Title>
      WeatherApp <Badge>2022-</Badge>
      </Title>
      <P>
      Enjoy the simple and elegant weather app with a minimalist design that is easy to use and visually appealing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://shabhaizafar.github.io/Responsive_Weather_App/">
          https://shabhaizafar.github.io/Responsive_Weather_App/ <ExternalLinkIcon mx="2px" />
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
      <WorkImage src="/images/works/weatherApp_01.png" alt="WeatherApp" />
      <WorkImage src="/images/works/weatherApp_02.png" alt="WeatherApp" />
      <WorkImage src="/images/works/weatherApp_03.png" alt="WeatherApp" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
