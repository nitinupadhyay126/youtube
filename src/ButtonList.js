const ButtonList=()=>
{
    const buttonList=["All","Music","Mixes","Lo-fi","Bolywood Music","Comedy","Filmi","News","Live","B Praak","Gamming","Dubbing", "Bhajan Music","indian Railways","Cars","Need To You"];
    return(
        <div className="flex space-x-2 m-2"> 
            {buttonList.map(e=> <button className="w-fit p-2 m-2 h-10 rounded-xl bg-slate-50 space-x-3 " key={e} >{e}</button> )}
        </div>
    );
}
export default ButtonList;