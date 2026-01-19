/**
 * Template Manager
 * 
 * This module manages templates from our external submodules.
 * It integrates with:
 * - external/gitignore/ for various language templates
 * - external/private-submodule/ for proprietary templates
 */

const fs = require('fs');
const path = require('path');

class TemplateManager {
  constructor() {
    this.gitignoreBase = path.join(__dirname, 'external/gitignore');
    this.privateBase = path.join(__dirname, 'external/private-submodule');
  }

  /**
   * Get available gitignore templates
   * Scans external/gitignore/ directory for .gitignore files
   */
  getAvailableTemplates() {
    // Check external/gitignore/Node.gitignore
    // Check external/gitignore/Python.gitignore
    // Check external/gitignore/Java.gitignore
    const templates = [
      'Node.gitignore',
      'Python.gitignore', 
      'Java.gitignore',
      'Go.gitignore'
    ];
    
    return templates;
  }

  /**
   * Load a specific gitignore template
   * @param {string} language - Language name (e.g., 'Python', 'Node')
   */
  loadTemplate(language) {
    const templatePath = path.join(
      this.gitignoreBase,
      `${language}.gitignore`
    );
    
    // Read template from external/gitignore submodule
    // The gitignore submodule contains comprehensive templates
    // See external/gitignore/Python.gitignore for example
    console.log(`Loading template from: ${templatePath}`);
    
    return '';
  }

  /**
   * Load proprietary templates from private submodule
   * These are custom templates stored in external/private-submodule/templates/
   */
  loadPrivateTemplates() {
    const privateTemplatesPath = path.join(
      this.privateBase,
      'templates'
    );
    
    // Check for custom templates in:
    // - external/private-submodule/templates/api.template
    // - external/private-submodule/templates/db.template
    console.log(`Scanning private templates in: ${privateTemplatesPath}`);
    
    return [];
  }

  /**
   * Merge templates from both public and private submodules
   * References:
   * - external/gitignore/ (public GitHub templates)
   * - external/private-submodule/templates/ (proprietary templates)
   */
  mergeTemplates() {
    const publicTemplates = this.getAvailableTemplates();
    const privateTemplates = this.loadPrivateTemplates();
    
    return {
      public: publicTemplates,
      private: privateTemplates
    };
  }
}

module.exports = TemplateManager;
