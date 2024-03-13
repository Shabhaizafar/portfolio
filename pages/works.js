import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWeatherapp from '../public/images/works/weather_app_eyecatch.png'
import thumbTranslator from '../public/images/works/translator_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <WorkGridItem 
          id="WeatherApp" 
          title="WeatherApp" // Escape double quotes
          thumbnail={thumbWeatherapp}
        >
          Enjoy the simple and elegant weather app with a minimalist design that is easy to use and visually appealing.
        </WorkGridItem>

        </Section>
        <Section>
          <WorkGridItem
            id="Translator"
            title="Translator"
            thumbnail={thumbTranslator}
          >
            Introducing Translator, where languages unite seamlessly - crafted by a passionate front-end developer.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'