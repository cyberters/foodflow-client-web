import React from 'react';

interface AlertBadgeProps extends React.HTMLAttributes<HTMLElement> {
    label?: string;
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ label, ...props }) => {
    return (
        <small {...props}>
            {label}
        </small>
    );
};

export default AlertBadge;
