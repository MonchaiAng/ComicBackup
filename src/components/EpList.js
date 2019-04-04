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
                            namebook={data[i].namebook}
                            name={data[i].name} 
                            view={data[i].view}
                            img={data[i].img} 
                        />
                    );
                })
            }
        </div>
    );
}
export default EpList;