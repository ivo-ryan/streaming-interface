
import { Navbar } from '../../components/navbar/navbar';
import { Menu } from '../../components/menu/menu';
import { DashboardContainer } from './style';

export const Dashboard = () => {

   

    return (
        
        <DashboardContainer>
            <Navbar/>

            <section>

                <Menu/>

            </section>

        </DashboardContainer>
    )
}