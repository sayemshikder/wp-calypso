/**
 * External dependencies
 */
import { ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { __ } from 'gutenberg/extensions/presets/jetpack/utils/i18n';

const JetpackFieldRequiredToggle = ( { required, onChange } ) => {
	return <ToggleControl label={ __( 'Required' ) } checked={ required } onChange={ onChange } />;
};

export default JetpackFieldRequiredToggle;
