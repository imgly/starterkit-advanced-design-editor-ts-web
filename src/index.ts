/**
 * CE.SDK Advanced Editor Starterkit - Main Entry Point
 *
 * A full-featured design editor with advanced tools and comprehensive asset libraries.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initAdvancedEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-advanced-editor-user',

  // Local assets
  // baseURL: `/assets/`,
};

// ============================================================================
// Initialize Advanced Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initAdvancedEditor(cesdk);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
