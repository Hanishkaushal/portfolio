class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div style="position:-webkit-sticky;
                top: 0;
                position: sticky;
                display: flex;
                font-family:Tw Cen MT;
                margin-top:5px;
                background-color: #676767;
                height: 35px;
                right: 0;">
            
            <div>
            
                <a href="index.html" style="font-size:25px; 
                                font-family:Tw Cen MT; 
                                text-decoration: none; 
                                color:#fff;
                                margin-left: 20px;">Hanish Kaushal</a>
            
            </div>
            
            <div style="position: absolute;
                        right: 220px;">
                        <a href="index.html" style="margin-right: 25px;
                                            font-size:25px; 
                                            font-family:Tw Cen MT; 
                                            text-decoration: none;
                                            color:#fff;">
                                            Home    </a>
                        <a href="#" style="margin-right: 25px;
                                            font-size:25px;
                                            font-family:Tw Cen MT;
                                            text-decoration: none;
                                            color:#fff;">
                                            About   </a>
                        <a href="#" style="margin-right: 25px;
                                        font-size:25px; 
                                        font-family:Tw Cen MT; 
                                        text-decoration: none; 
                                        color:#fff;">
                                        Education   </a>
                        <a href="#" style="margin-right: 25px;
                                        font-size:25px; 
                                        font-family:Tw Cen MT; 
                                        text-decoration: none; 
                                        color:#fff;">
                                        Contact     </a>
                        <a href="expertise.html" style="margin-right: 25px;
                                        font-size:25px; 
                                        font-family:Tw Cen MT; 
                                        text-decoration: none; 
                                        color:#fff;">
                                        Experience  </a>
            </div>
        </div>
        </div>
        `
    }
}
customElements.define('my-header',MyHeader)

