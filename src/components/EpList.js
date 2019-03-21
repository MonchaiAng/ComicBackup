import React from 'react';
import Ep from './Ep';

const EpList =({data}) =>{
	return (
        <div>
            {
                data.map((user,i) =>{ 
                return (
                    <Ep 
                        key ={i} 
                        id={data[i].id} 
                        name={data[i].name} 
                        img={data[i].img} 
                    />
                );
                })
            }
        </div>
    );
}
export default EpList;