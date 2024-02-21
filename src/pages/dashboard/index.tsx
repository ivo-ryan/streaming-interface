
import { Navbar } from '../../components/navbar/navbar';
import { Animes } from '../../components/animes/animes';
import { DashboardContainer } from './style';

export const Dashboard = () => {

   

    return (
        <DashboardContainer>
            <Navbar/>

            <Animes/>

        </DashboardContainer>
    )
}