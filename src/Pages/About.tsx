import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import CardItem from '../Components/CardItem'
import CardsBox from '../Components/CardsBox'
import Cooking from '../Assets/Images/Cooking.jpg'

const About: React.FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <div className='flex-grow pb-8'>
                    <div className="grid grid-cols-6 gap-8 py-8">
                        <div className="col-span-2">
                            <CardItem intro='Trochę o nas' 
                                header='...poznajmy się!' 
                                desc='Nie od razu Rzym zbudowano — tak samo każdy wielki projekt zaczyna się od małego zespołu. Food.flow to inicjatywa duetu pasjonatów: jedzenia i dobrej organizacji. Z tej mieszanki narodził się pomysł, który ma szansę odmienić rynek zakupów spożywczych w Polsce (a może nawet dalej).' background={false}/>
                        </div>
                        <div className="col-span-4"></div>
                    </div>
                    <CardsBox>
                        <CardItem intro='CEO / pomysłodawca' header='Dominik Hofman' desc='Twórca projektu food.flow. Programista z 5-letnim stażem, zaczynał od stron internetowych, teraz rozwija się w obszarze AI/ML. Dodatkowo pasjonat fotografii i grafiki, więc nie tylko kładzie nacisk na aspekty techniczne projektu, ale także dba o pozytywny odbiór. Świeżo upieczony pan Magister na Uniwersytecie Ekonomicznym we Wroclawiu.'
                        background={true}/>
                        <CardItem intro='Researcher' header='Maria Kuszyńska' desc='Twórca projektu food.flow. Programista z 5-letnim stażem, zaczynał od stron internetowych, teraz rozwija się w obszarze AI/ML. Dodatkowo pasjonat fotografii i grafiki, więc nie tylko kładzie nacisk na aspekty techniczne projektu, ale także dba o pozytywny odbiór. Świeżo upieczony pan Magister na Uniwersytecie Ekonomicznym we Wroclawiu.'
                        background={true}/>
                        <CardItem intro='Rekrutujemy...' header='i to możesz być Ty!' desc='Twórca projektu food.flow. Programista z 5-letnim stażem, zaczynał od stron internetowych, teraz rozwija się w obszarze AI/ML. Dodatkowo pasjonat fotografii i grafiki, więc nie tylko kładzie nacisk na aspekty techniczne projektu, ale także dba o pozytywny odbiór. Świeżo upieczony pan Magister na Uniwersytecie Ekonomicznym we Wroclawiu.'
                        background={true}/>
                    </CardsBox>
                    <div className='py-2'></div>
                    <CardsBox>
                        <img src={Cooking} alt="Cooking" srcSet="" className='rounded-lg border border-solid border-black'/>
                        <img src={Cooking} alt="Cooking" srcSet="" className='rounded-lg border border-solid border-black'/>
                        <img src={Cooking} alt="Cooking" srcSet="" className='rounded-lg border border-dashed border-black'/>
                    </CardsBox>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default About