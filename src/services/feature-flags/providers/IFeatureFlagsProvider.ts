/**
 * Interface for feature flags providers
 * Allows switching between different feature flag providers (PostHog, etc.)
 */

import { FeatureFlagsAndPayloads, FeatureFlagsSettings } from "@/shared/services/feature-flags"

/**
 * Abstract interface for feature flags providers
 * Any feature flags provider must implement this interface
 */
export interface IFeatureFlagsProvider {
	getAllFlagsAndPayloads(options: { flagKeys?: string[] }): Promise<FeatureFlagsAndPayloads | undefined>

	/**
	 * Check if the provider is enabled and ready
	 * @returns Boolean indicating whether the provider is enabled
	 */
	isEnabled(): boolean

	/**
	 * Get current feature flags settings
	 * @returns Current feature flags settings
	 */
	getSettings(): FeatureFlagsSettings

	/**
	 * Clean up resources when the provider is disposed
	 */
	dispose(): Promise<void>
}
