import { registerWidget } from '@commandcore/widget-sdk';
import { aiManifest } from './ai';

export function registerAllWidgets() {
  registerWidget(aiManifest);
}