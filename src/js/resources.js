import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Back: new ImageSource('images/back.png'),
    Block: new ImageSource('images/noot.png'),
    Hitbox: new ImageSource('images/hit.png'), 
    Dance: new ImageSource('/images/shibadance.png'),
    Shober: new ImageSource('/images/shibashober.png'),
    Sit: new ImageSource('/images/shibasit.png'),
    Stand: new ImageSource('/images/shibastand.png'),
    Drum: new ImageSource('/images/shibaDrum.png'),
    Guitar: new ImageSource('/images/shibaGuitar.png'),
    Samba: new ImageSource('/images/shibaSamba.png'),
    DanceMirror: new ImageSource('/images/shibadancemirror.png'), 
    GuitarMirror: new ImageSource('/images/shibaguitarmirror.png'),
    CoolText: new ImageSource('/images/cooltext.png'),
    CoolTextPlay: new ImageSource('/images/cooltextplay.png'),
    Scene1: new ImageSource('/images/scene1.png'),
    Scene2: new ImageSource('/images/scene2.png'),
    Scene3: new ImageSource('/images/scene3.png'),
    Scene4: new ImageSource('/images/scene4.png'),
    Scene5: new ImageSource('/images/scene5.png'),
    Scene6: new ImageSource('/images/scene6.png'),
    X: new ImageSource('/images/x.png'),
    Score: new ImageSource('/images/score.png'),
    HighScore: new ImageSource('/images/highscore.png'),
    Restart: new ImageSource('/images/restart.png'),
    Noot: new ImageSource('/images/noot2.png'),
    HowToPlay: new ImageSource('/images/howtoplay.png'),


}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }