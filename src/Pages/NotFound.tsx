import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'

const NotFound: React.FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <div className='flex-grow'>NotFound</div>
            </PageLayout>
        </MainLayout>
    )
}

export default NotFound