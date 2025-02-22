import {Component, Element, h, getAssetPath, Host, Prop} from '@stencil/core';
import {Result, ResultTemplatesHelpers} from '@coveo/headless';
import {ResultContext} from '../result-template-decorators';
import {objectTypeIcons} from './object-type-icons';
import {fileTypeIcons} from './file-type-icons';

/**
 * The ResultIcon component outputs the corresponding icon for a given file type.
 *
 * The component searches for a suitable icon or outputs a generic icon if none is found.
 */
@Component({
  tag: 'atomic-result-icon',
  styleUrl: 'atomic-result-icon.pcss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class AtomicResultIcon {
  @ResultContext() private result!: Result;

  @Element() host!: HTMLElement;

  /**
   * Allow to specify the icon to display from the list of available icons.
   *
   * By default, will parse the `objecttype` field and the `filetype` field to find a matching icon. If none are available, will use the `custom` icon.
   */
  @Prop() icon?: string;

  private get defaultIcon() {
    const fileTypeValue = ResultTemplatesHelpers.getResultProperty(
      this.result,
      'filetype'
    ) as string;
    const objectTypeValue = ResultTemplatesHelpers.getResultProperty(
      this.result,
      'objecttype'
    ) as string;

    const fileType = fileTypeIcons[fileTypeValue?.toLowerCase()];
    const objectType = objectTypeIcons[objectTypeValue?.toLowerCase()];
    return objectType || fileType || 'custom';
  }

  public render() {
    const icon = this.icon || this.defaultIcon;
    const iconPath = getAssetPath(`./assets/${icon}.svg`);

    return (
      <Host
        class={icon}
        style={{'background-image': `url(${iconPath})`}}
      ></Host>
    );
  }
}
