import {} from 'egl-core';
import {
  EagleController,
  OnTouch,
  PropGetter,
} from 'egl-core/src/decorators/app.decorator';
import HomeView from './HomeView';

export type HomeState = {
  userName: string;
};

@EagleController<HomeState>({
  view: HomeView,
  initialProps: {
    userName: 'Asa',
  },
})
class HomeController {
  constructor() {}

  @OnTouch('@egl/test_ac')
  public test() {
    console.log(new HomeController().getUserName());
  }

  @OnTouch('egl/test_ac_1')
  public test2() {
    console.log('the callback called');
  }

  @PropGetter()
  private getUserName(userName?: string) {
    userName?.toLowerCase();
  }
}

export default HomeController;
