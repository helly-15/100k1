import './ModalStarter.scss';
const classnameRoot = 'modal-starter';

interface IModalStarter {
    setModalShown:(arg: boolean)=>void
}

export const ModalStarter = (props:IModalStarter) => {
    return <div className={ classnameRoot }>
        <img  className={ classnameRoot + '__image_new-year' } src={'/fireworks2.png'} alt ={'new year fireworks'}/>
        <div className={ classnameRoot + '__image-wrapper' }>
            <img  className={ classnameRoot + '__image' } src={'/screenStarter.jpg'} alt ={'intro logo'}/>
            <button className={ classnameRoot + '__button' } onClick={()=>{
                props.setModalShown(false)
                let simpleGameSound = new Audio("/simple-game.mp3");
                simpleGameSound.play();
            }

            }>
                 Поехали!</button>
            <button className={ classnameRoot + '__button-music' } onClick={()=>{
                let introSound = new Audio("/zastavka-100-k-1-stereo.mp3");
                introSound.play();
            }
            }> 𝄞 </button>
        </div>
    </div>
}
