import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rodrigo Strapazzon</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        RodrigoStrapazzon
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        {'Desenvolvedor Python Full Stack'}
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
