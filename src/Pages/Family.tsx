import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import CardHeader from '../Components/CardHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faGhost, faListDots, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import useLoadFamilies from '../Hooks/useLoadFamilies'
import ListBox from '../Components/ListBox'
import { Link } from 'react-router-dom'
import ListBoxItem from '../Components/ListBoxItem'
import MainButton from '../Components/MainButton'
import { FormatTimeStamp } from '../Services/FormatTimeStamp'

const Family: React.FC = () => {
    const { families, loading, error } = useLoadFamilies()
    return (
        <div className="flex-grow space-y-4 h-max">
            <CardHeader title="Twoje gospodarstwa domowe" subtitle="Grupy">
                <FontAwesomeIcon icon={faUserGroup} className="me-auto h-6 lg:h-8 text-brand-warm"/>
            </CardHeader>
            {(families) ? 
                <div className="flex flex-col space-y-3">
                    <ListBox>
                        {families.length > 0 ? families.map((item) => (
                            <Link to={`/dashboard/family/${item.familyId}`} className="hover:bg-primary rounded-md transition-all hover:px-3 flex flex-row">
                                <ListBoxItem value={item.familyName} key={item.familyId}>
                                    <div className="flex flex-row gap-3">
                                        <span className="text-xs lg:text-md">
                                            Członkowie: {item.familyMembers?.length}
                                        </span>
                                         <span className="text-xs lg:text-md">
                                            Utworzono: {FormatTimeStamp(item.familyCreatedAt)}
                                        </span>
                                    </div>
                                </ListBoxItem>
                                <FontAwesomeIcon icon={faListDots} className="ms-auto my-auto"/>
                            </Link>
                        )) : <ListBoxItem label="Pusta lista">
                                <span>Wygląda na to, że jeszcze nie masz swojej kulinarnej drużyny!</span>
                            </ListBoxItem>}
                    </ListBox>
                    <div className="flex flex-row space-x-3">
                        <MainButton label='Znajdź grupę' href='/dashboard/search-family'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </MainButton>  
                        <MainButton label='Utwórz nową' href='/dashboard/create-family'>
                            <FontAwesomeIcon icon={faAdd}/>
                        </MainButton>  
                    </div>
                </div> 
            : <div className="flex flex-col space-y-2 mt-2">
                <FontAwesomeIcon icon={faGhost} className="me-auto h-8 text-brand-warm animate-bounce-slow"/>
                <div></div>
                <span>Nie należysz jeszcze do żadnej grupy</span>
                <div className="flex flex-row space-x-2">
                    <MainButton label='Utwórz' href='/dashboard/create-family'>
                        <FontAwesomeIcon icon={faAdd}/>
                    </MainButton>    
                </div>    
            </div>}
        </div>
    )
}

export default Family