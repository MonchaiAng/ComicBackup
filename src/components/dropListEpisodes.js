import React from 'react';
import './dropListEpisodes.css';
import image from '../../img';


const dropListEpisodes = () => {
    return(
    	<div class="all">
    		<h1>Demo Name Cartoon</h1>	
    		<ul>
	    		<li class="name"><h3>Read</h3></li>
			    <li>
			        <ul class="dropdown name" >
					  <li class="dropbtn" >Nidome</li>
					  <li class="dropdown-content">
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					  </li>
					</ul>
				</li>
			</ul>
			<ul class="dropdown">
			    <li class="dropbtn">Ep.1:Start </li>
			    <li class="dropdown-content">
			      <a href="#">Ep.1:Start</a>
			      <a href="#">Ep.2:middle</a>
			      <a href="#">Ep.3:End</a>
			    </li>
		    </ul>
		    <h3 align="center">All page</h3>
		    <img  width = '750px' height='1000px' />
		    <br/><br/>
			<img src= "http://3.bp.blogspot.com/-nNciHqkyVV0/UFtReavlnHI/AAAAAAACIVQ/Roz6ENnkons/s1600/Niceoppai_002.jpg" width = '750px' height='1000px' />
		</div>
    );
};

export default dropListEpisodes;