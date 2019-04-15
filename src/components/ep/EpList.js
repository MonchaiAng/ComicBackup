import React from 'react';
import Ep from './Ep';

const EpList =({data, onRouteChange}) =>{
	return (
        <div>
            {
                data.map((user,i) =>{ 
                    return (
                        <Ep 
                            key ={i}
                            _id={data[i]._id}
                            id={data[i].id} 
                            namebook={data[i].namebook}
                            ch={data[i].ch}
                            name={data[i].name} 
                            view={data[i].view}
                            img={data[i].img} 
                            onRouteChange={onRouteChange}
                        />
                    );
                })
            }
        </div>
    );
}
export default EpList;