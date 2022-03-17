import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare } from 'react-icons/fi';

export default function Dashboard(){
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <Header/>
      
      <div className="content">
        <Title name="Atendimentos">
          <FiMessageSquare size={25} />
        </Title>
      </div>
      
    </div>
  )
}