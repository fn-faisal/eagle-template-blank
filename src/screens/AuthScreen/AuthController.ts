import {EagleController} from 'egl-core/src/decorators/app.decorator';
import AuthView from './AuthView';

@EagleController({view: AuthView})
export default class AuthController {}
