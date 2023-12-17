import React from 'react'

export default function Another(props) {
return (
    <div>
        Another component { `${props.id} ${props.name}` }
    </div>
);
}