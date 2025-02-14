import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Imagebuilder extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Imagebuilder.Types.ClientConfiguration)
  config: Config & Imagebuilder.Types.ClientConfiguration;
  /**
   * CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
   */
  cancelImageCreation(params: Imagebuilder.Types.CancelImageCreationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CancelImageCreationResponse) => void): Request<Imagebuilder.Types.CancelImageCreationResponse, AWSError>;
  /**
   * CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
   */
  cancelImageCreation(callback?: (err: AWSError, data: Imagebuilder.Types.CancelImageCreationResponse) => void): Request<Imagebuilder.Types.CancelImageCreationResponse, AWSError>;
  /**
   * Cancel a specific image lifecycle policy runtime instance.
   */
  cancelLifecycleExecution(params: Imagebuilder.Types.CancelLifecycleExecutionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CancelLifecycleExecutionResponse) => void): Request<Imagebuilder.Types.CancelLifecycleExecutionResponse, AWSError>;
  /**
   * Cancel a specific image lifecycle policy runtime instance.
   */
  cancelLifecycleExecution(callback?: (err: AWSError, data: Imagebuilder.Types.CancelLifecycleExecutionResponse) => void): Request<Imagebuilder.Types.CancelLifecycleExecutionResponse, AWSError>;
  /**
   * Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:   Inline, using the data property in the request body.   A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body.  
   */
  createComponent(params: Imagebuilder.Types.CreateComponentRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateComponentResponse) => void): Request<Imagebuilder.Types.CreateComponentResponse, AWSError>;
  /**
   * Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:   Inline, using the data property in the request body.   A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body.  
   */
  createComponent(callback?: (err: AWSError, data: Imagebuilder.Types.CreateComponentResponse) => void): Request<Imagebuilder.Types.CreateComponentResponse, AWSError>;
  /**
   * Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
   */
  createContainerRecipe(params: Imagebuilder.Types.CreateContainerRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateContainerRecipeResponse) => void): Request<Imagebuilder.Types.CreateContainerRecipeResponse, AWSError>;
  /**
   * Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
   */
  createContainerRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.CreateContainerRecipeResponse) => void): Request<Imagebuilder.Types.CreateContainerRecipeResponse, AWSError>;
  /**
   * Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
   */
  createDistributionConfiguration(params: Imagebuilder.Types.CreateDistributionConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.CreateDistributionConfigurationResponse, AWSError>;
  /**
   * Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
   */
  createDistributionConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.CreateDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.CreateDistributionConfigurationResponse, AWSError>;
  /**
   * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
   */
  createImage(params: Imagebuilder.Types.CreateImageRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateImageResponse) => void): Request<Imagebuilder.Types.CreateImageResponse, AWSError>;
  /**
   * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
   */
  createImage(callback?: (err: AWSError, data: Imagebuilder.Types.CreateImageResponse) => void): Request<Imagebuilder.Types.CreateImageResponse, AWSError>;
  /**
   * Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
   */
  createImagePipeline(params: Imagebuilder.Types.CreateImagePipelineRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateImagePipelineResponse) => void): Request<Imagebuilder.Types.CreateImagePipelineResponse, AWSError>;
  /**
   * Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
   */
  createImagePipeline(callback?: (err: AWSError, data: Imagebuilder.Types.CreateImagePipelineResponse) => void): Request<Imagebuilder.Types.CreateImagePipelineResponse, AWSError>;
  /**
   * Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
   */
  createImageRecipe(params: Imagebuilder.Types.CreateImageRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateImageRecipeResponse) => void): Request<Imagebuilder.Types.CreateImageRecipeResponse, AWSError>;
  /**
   * Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
   */
  createImageRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.CreateImageRecipeResponse) => void): Request<Imagebuilder.Types.CreateImageRecipeResponse, AWSError>;
  /**
   * Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
   */
  createInfrastructureConfiguration(params: Imagebuilder.Types.CreateInfrastructureConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.CreateInfrastructureConfigurationResponse, AWSError>;
  /**
   * Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
   */
  createInfrastructureConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.CreateInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.CreateInfrastructureConfigurationResponse, AWSError>;
  /**
   * Create a lifecycle policy resource.
   */
  createLifecyclePolicy(params: Imagebuilder.Types.CreateLifecyclePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Create a lifecycle policy resource.
   */
  createLifecyclePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.CreateLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Create a new workflow or a new version of an existing workflow.
   */
  createWorkflow(params: Imagebuilder.Types.CreateWorkflowRequest, callback?: (err: AWSError, data: Imagebuilder.Types.CreateWorkflowResponse) => void): Request<Imagebuilder.Types.CreateWorkflowResponse, AWSError>;
  /**
   * Create a new workflow or a new version of an existing workflow.
   */
  createWorkflow(callback?: (err: AWSError, data: Imagebuilder.Types.CreateWorkflowResponse) => void): Request<Imagebuilder.Types.CreateWorkflowResponse, AWSError>;
  /**
   * Deletes a component build version.
   */
  deleteComponent(params: Imagebuilder.Types.DeleteComponentRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteComponentResponse) => void): Request<Imagebuilder.Types.DeleteComponentResponse, AWSError>;
  /**
   * Deletes a component build version.
   */
  deleteComponent(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteComponentResponse) => void): Request<Imagebuilder.Types.DeleteComponentResponse, AWSError>;
  /**
   * Deletes a container recipe.
   */
  deleteContainerRecipe(params: Imagebuilder.Types.DeleteContainerRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteContainerRecipeResponse) => void): Request<Imagebuilder.Types.DeleteContainerRecipeResponse, AWSError>;
  /**
   * Deletes a container recipe.
   */
  deleteContainerRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteContainerRecipeResponse) => void): Request<Imagebuilder.Types.DeleteContainerRecipeResponse, AWSError>;
  /**
   * Deletes a distribution configuration.
   */
  deleteDistributionConfiguration(params: Imagebuilder.Types.DeleteDistributionConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.DeleteDistributionConfigurationResponse, AWSError>;
  /**
   * Deletes a distribution configuration.
   */
  deleteDistributionConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.DeleteDistributionConfigurationResponse, AWSError>;
  /**
   * Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.   To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the  Amazon EC2 User Guide .   To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the  Amazon EC2 Windows Guide .   To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide.  
   */
  deleteImage(params: Imagebuilder.Types.DeleteImageRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImageResponse) => void): Request<Imagebuilder.Types.DeleteImageResponse, AWSError>;
  /**
   * Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.   To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the  Amazon EC2 User Guide .   To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the  Amazon EC2 Windows Guide .   To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide.  
   */
  deleteImage(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImageResponse) => void): Request<Imagebuilder.Types.DeleteImageResponse, AWSError>;
  /**
   * Deletes an image pipeline.
   */
  deleteImagePipeline(params: Imagebuilder.Types.DeleteImagePipelineRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImagePipelineResponse) => void): Request<Imagebuilder.Types.DeleteImagePipelineResponse, AWSError>;
  /**
   * Deletes an image pipeline.
   */
  deleteImagePipeline(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImagePipelineResponse) => void): Request<Imagebuilder.Types.DeleteImagePipelineResponse, AWSError>;
  /**
   * Deletes an image recipe.
   */
  deleteImageRecipe(params: Imagebuilder.Types.DeleteImageRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImageRecipeResponse) => void): Request<Imagebuilder.Types.DeleteImageRecipeResponse, AWSError>;
  /**
   * Deletes an image recipe.
   */
  deleteImageRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteImageRecipeResponse) => void): Request<Imagebuilder.Types.DeleteImageRecipeResponse, AWSError>;
  /**
   * Deletes an infrastructure configuration.
   */
  deleteInfrastructureConfiguration(params: Imagebuilder.Types.DeleteInfrastructureConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.DeleteInfrastructureConfigurationResponse, AWSError>;
  /**
   * Deletes an infrastructure configuration.
   */
  deleteInfrastructureConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.DeleteInfrastructureConfigurationResponse, AWSError>;
  /**
   * Delete the specified lifecycle policy resource.
   */
  deleteLifecyclePolicy(params: Imagebuilder.Types.DeleteLifecyclePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Delete the specified lifecycle policy resource.
   */
  deleteLifecyclePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Deletes a specific workflow resource.
   */
  deleteWorkflow(params: Imagebuilder.Types.DeleteWorkflowRequest, callback?: (err: AWSError, data: Imagebuilder.Types.DeleteWorkflowResponse) => void): Request<Imagebuilder.Types.DeleteWorkflowResponse, AWSError>;
  /**
   * Deletes a specific workflow resource.
   */
  deleteWorkflow(callback?: (err: AWSError, data: Imagebuilder.Types.DeleteWorkflowResponse) => void): Request<Imagebuilder.Types.DeleteWorkflowResponse, AWSError>;
  /**
   * Gets a component object.
   */
  getComponent(params: Imagebuilder.Types.GetComponentRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetComponentResponse) => void): Request<Imagebuilder.Types.GetComponentResponse, AWSError>;
  /**
   * Gets a component object.
   */
  getComponent(callback?: (err: AWSError, data: Imagebuilder.Types.GetComponentResponse) => void): Request<Imagebuilder.Types.GetComponentResponse, AWSError>;
  /**
   * Gets a component policy.
   */
  getComponentPolicy(params: Imagebuilder.Types.GetComponentPolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetComponentPolicyResponse) => void): Request<Imagebuilder.Types.GetComponentPolicyResponse, AWSError>;
  /**
   * Gets a component policy.
   */
  getComponentPolicy(callback?: (err: AWSError, data: Imagebuilder.Types.GetComponentPolicyResponse) => void): Request<Imagebuilder.Types.GetComponentPolicyResponse, AWSError>;
  /**
   * Retrieves a container recipe.
   */
  getContainerRecipe(params: Imagebuilder.Types.GetContainerRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetContainerRecipeResponse) => void): Request<Imagebuilder.Types.GetContainerRecipeResponse, AWSError>;
  /**
   * Retrieves a container recipe.
   */
  getContainerRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.GetContainerRecipeResponse) => void): Request<Imagebuilder.Types.GetContainerRecipeResponse, AWSError>;
  /**
   * Retrieves the policy for a container recipe.
   */
  getContainerRecipePolicy(params: Imagebuilder.Types.GetContainerRecipePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetContainerRecipePolicyResponse) => void): Request<Imagebuilder.Types.GetContainerRecipePolicyResponse, AWSError>;
  /**
   * Retrieves the policy for a container recipe.
   */
  getContainerRecipePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.GetContainerRecipePolicyResponse) => void): Request<Imagebuilder.Types.GetContainerRecipePolicyResponse, AWSError>;
  /**
   * Gets a distribution configuration.
   */
  getDistributionConfiguration(params: Imagebuilder.Types.GetDistributionConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.GetDistributionConfigurationResponse, AWSError>;
  /**
   * Gets a distribution configuration.
   */
  getDistributionConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.GetDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.GetDistributionConfigurationResponse, AWSError>;
  /**
   * Gets an image.
   */
  getImage(params: Imagebuilder.Types.GetImageRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetImageResponse) => void): Request<Imagebuilder.Types.GetImageResponse, AWSError>;
  /**
   * Gets an image.
   */
  getImage(callback?: (err: AWSError, data: Imagebuilder.Types.GetImageResponse) => void): Request<Imagebuilder.Types.GetImageResponse, AWSError>;
  /**
   * Gets an image pipeline.
   */
  getImagePipeline(params: Imagebuilder.Types.GetImagePipelineRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetImagePipelineResponse) => void): Request<Imagebuilder.Types.GetImagePipelineResponse, AWSError>;
  /**
   * Gets an image pipeline.
   */
  getImagePipeline(callback?: (err: AWSError, data: Imagebuilder.Types.GetImagePipelineResponse) => void): Request<Imagebuilder.Types.GetImagePipelineResponse, AWSError>;
  /**
   * Gets an image policy.
   */
  getImagePolicy(params: Imagebuilder.Types.GetImagePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetImagePolicyResponse) => void): Request<Imagebuilder.Types.GetImagePolicyResponse, AWSError>;
  /**
   * Gets an image policy.
   */
  getImagePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.GetImagePolicyResponse) => void): Request<Imagebuilder.Types.GetImagePolicyResponse, AWSError>;
  /**
   * Gets an image recipe.
   */
  getImageRecipe(params: Imagebuilder.Types.GetImageRecipeRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetImageRecipeResponse) => void): Request<Imagebuilder.Types.GetImageRecipeResponse, AWSError>;
  /**
   * Gets an image recipe.
   */
  getImageRecipe(callback?: (err: AWSError, data: Imagebuilder.Types.GetImageRecipeResponse) => void): Request<Imagebuilder.Types.GetImageRecipeResponse, AWSError>;
  /**
   * Gets an image recipe policy.
   */
  getImageRecipePolicy(params: Imagebuilder.Types.GetImageRecipePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetImageRecipePolicyResponse) => void): Request<Imagebuilder.Types.GetImageRecipePolicyResponse, AWSError>;
  /**
   * Gets an image recipe policy.
   */
  getImageRecipePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.GetImageRecipePolicyResponse) => void): Request<Imagebuilder.Types.GetImageRecipePolicyResponse, AWSError>;
  /**
   * Gets an infrastructure configuration.
   */
  getInfrastructureConfiguration(params: Imagebuilder.Types.GetInfrastructureConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.GetInfrastructureConfigurationResponse, AWSError>;
  /**
   * Gets an infrastructure configuration.
   */
  getInfrastructureConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.GetInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.GetInfrastructureConfigurationResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the lifecycle policy.
   */
  getLifecycleExecution(params: Imagebuilder.Types.GetLifecycleExecutionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetLifecycleExecutionResponse) => void): Request<Imagebuilder.Types.GetLifecycleExecutionResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the lifecycle policy.
   */
  getLifecycleExecution(callback?: (err: AWSError, data: Imagebuilder.Types.GetLifecycleExecutionResponse) => void): Request<Imagebuilder.Types.GetLifecycleExecutionResponse, AWSError>;
  /**
   * Get details for the specified image lifecycle policy.
   */
  getLifecyclePolicy(params: Imagebuilder.Types.GetLifecyclePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Get details for the specified image lifecycle policy.
   */
  getLifecyclePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.GetLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Get a workflow resource object.
   */
  getWorkflow(params: Imagebuilder.Types.GetWorkflowRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowResponse) => void): Request<Imagebuilder.Types.GetWorkflowResponse, AWSError>;
  /**
   * Get a workflow resource object.
   */
  getWorkflow(callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowResponse) => void): Request<Imagebuilder.Types.GetWorkflowResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the workflow.
   */
  getWorkflowExecution(params: Imagebuilder.Types.GetWorkflowExecutionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowExecutionResponse) => void): Request<Imagebuilder.Types.GetWorkflowExecutionResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the workflow.
   */
  getWorkflowExecution(callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowExecutionResponse) => void): Request<Imagebuilder.Types.GetWorkflowExecutionResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the workflow step.
   */
  getWorkflowStepExecution(params: Imagebuilder.Types.GetWorkflowStepExecutionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowStepExecutionResponse) => void): Request<Imagebuilder.Types.GetWorkflowStepExecutionResponse, AWSError>;
  /**
   * Get the runtime information that was logged for a specific runtime instance of the workflow step.
   */
  getWorkflowStepExecution(callback?: (err: AWSError, data: Imagebuilder.Types.GetWorkflowStepExecutionResponse) => void): Request<Imagebuilder.Types.GetWorkflowStepExecutionResponse, AWSError>;
  /**
   * Imports a component and transforms its data into a component document.
   */
  importComponent(params: Imagebuilder.Types.ImportComponentRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ImportComponentResponse) => void): Request<Imagebuilder.Types.ImportComponentResponse, AWSError>;
  /**
   * Imports a component and transforms its data into a component document.
   */
  importComponent(callback?: (err: AWSError, data: Imagebuilder.Types.ImportComponentResponse) => void): Request<Imagebuilder.Types.ImportComponentResponse, AWSError>;
  /**
   * When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API ImportImage action uses those files to import your VM and create an AMI. To import using the CLI command, see import-image  You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.
   */
  importVmImage(params: Imagebuilder.Types.ImportVmImageRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ImportVmImageResponse) => void): Request<Imagebuilder.Types.ImportVmImageResponse, AWSError>;
  /**
   * When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API ImportImage action uses those files to import your VM and create an AMI. To import using the CLI command, see import-image  You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.
   */
  importVmImage(callback?: (err: AWSError, data: Imagebuilder.Types.ImportVmImageResponse) => void): Request<Imagebuilder.Types.ImportVmImageResponse, AWSError>;
  /**
   * Returns the list of component build versions for the specified semantic version.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
   */
  listComponentBuildVersions(params: Imagebuilder.Types.ListComponentBuildVersionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListComponentBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListComponentBuildVersionsResponse, AWSError>;
  /**
   * Returns the list of component build versions for the specified semantic version.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
   */
  listComponentBuildVersions(callback?: (err: AWSError, data: Imagebuilder.Types.ListComponentBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListComponentBuildVersionsResponse, AWSError>;
  /**
   * Returns the list of components that can be filtered by name, or by using the listed filters to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
   */
  listComponents(params: Imagebuilder.Types.ListComponentsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListComponentsResponse) => void): Request<Imagebuilder.Types.ListComponentsResponse, AWSError>;
  /**
   * Returns the list of components that can be filtered by name, or by using the listed filters to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
   */
  listComponents(callback?: (err: AWSError, data: Imagebuilder.Types.ListComponentsResponse) => void): Request<Imagebuilder.Types.ListComponentsResponse, AWSError>;
  /**
   * Returns a list of container recipes.
   */
  listContainerRecipes(params: Imagebuilder.Types.ListContainerRecipesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListContainerRecipesResponse) => void): Request<Imagebuilder.Types.ListContainerRecipesResponse, AWSError>;
  /**
   * Returns a list of container recipes.
   */
  listContainerRecipes(callback?: (err: AWSError, data: Imagebuilder.Types.ListContainerRecipesResponse) => void): Request<Imagebuilder.Types.ListContainerRecipesResponse, AWSError>;
  /**
   * Returns a list of distribution configurations.
   */
  listDistributionConfigurations(params: Imagebuilder.Types.ListDistributionConfigurationsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListDistributionConfigurationsResponse) => void): Request<Imagebuilder.Types.ListDistributionConfigurationsResponse, AWSError>;
  /**
   * Returns a list of distribution configurations.
   */
  listDistributionConfigurations(callback?: (err: AWSError, data: Imagebuilder.Types.ListDistributionConfigurationsResponse) => void): Request<Imagebuilder.Types.ListDistributionConfigurationsResponse, AWSError>;
  /**
   * Returns a list of image build versions.
   */
  listImageBuildVersions(params: Imagebuilder.Types.ListImageBuildVersionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImageBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListImageBuildVersionsResponse, AWSError>;
  /**
   * Returns a list of image build versions.
   */
  listImageBuildVersions(callback?: (err: AWSError, data: Imagebuilder.Types.ListImageBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListImageBuildVersionsResponse, AWSError>;
  /**
   * List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
   */
  listImagePackages(params: Imagebuilder.Types.ListImagePackagesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePackagesResponse) => void): Request<Imagebuilder.Types.ListImagePackagesResponse, AWSError>;
  /**
   * List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
   */
  listImagePackages(callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePackagesResponse) => void): Request<Imagebuilder.Types.ListImagePackagesResponse, AWSError>;
  /**
   * Returns a list of images created by the specified pipeline.
   */
  listImagePipelineImages(params: Imagebuilder.Types.ListImagePipelineImagesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePipelineImagesResponse) => void): Request<Imagebuilder.Types.ListImagePipelineImagesResponse, AWSError>;
  /**
   * Returns a list of images created by the specified pipeline.
   */
  listImagePipelineImages(callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePipelineImagesResponse) => void): Request<Imagebuilder.Types.ListImagePipelineImagesResponse, AWSError>;
  /**
   * Returns a list of image pipelines.
   */
  listImagePipelines(params: Imagebuilder.Types.ListImagePipelinesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePipelinesResponse) => void): Request<Imagebuilder.Types.ListImagePipelinesResponse, AWSError>;
  /**
   * Returns a list of image pipelines.
   */
  listImagePipelines(callback?: (err: AWSError, data: Imagebuilder.Types.ListImagePipelinesResponse) => void): Request<Imagebuilder.Types.ListImagePipelinesResponse, AWSError>;
  /**
   * Returns a list of image recipes.
   */
  listImageRecipes(params: Imagebuilder.Types.ListImageRecipesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImageRecipesResponse) => void): Request<Imagebuilder.Types.ListImageRecipesResponse, AWSError>;
  /**
   * Returns a list of image recipes.
   */
  listImageRecipes(callback?: (err: AWSError, data: Imagebuilder.Types.ListImageRecipesResponse) => void): Request<Imagebuilder.Types.ListImageRecipesResponse, AWSError>;
  /**
   * Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request:    accountId     imageBuildVersionArn     imagePipelineArn     vulnerabilityId   
   */
  listImageScanFindingAggregations(params: Imagebuilder.Types.ListImageScanFindingAggregationsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImageScanFindingAggregationsResponse) => void): Request<Imagebuilder.Types.ListImageScanFindingAggregationsResponse, AWSError>;
  /**
   * Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request:    accountId     imageBuildVersionArn     imagePipelineArn     vulnerabilityId   
   */
  listImageScanFindingAggregations(callback?: (err: AWSError, data: Imagebuilder.Types.ListImageScanFindingAggregationsResponse) => void): Request<Imagebuilder.Types.ListImageScanFindingAggregationsResponse, AWSError>;
  /**
   * Returns a list of image scan findings for your account.
   */
  listImageScanFindings(params: Imagebuilder.Types.ListImageScanFindingsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImageScanFindingsResponse) => void): Request<Imagebuilder.Types.ListImageScanFindingsResponse, AWSError>;
  /**
   * Returns a list of image scan findings for your account.
   */
  listImageScanFindings(callback?: (err: AWSError, data: Imagebuilder.Types.ListImageScanFindingsResponse) => void): Request<Imagebuilder.Types.ListImageScanFindingsResponse, AWSError>;
  /**
   * Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
   */
  listImages(params: Imagebuilder.Types.ListImagesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListImagesResponse) => void): Request<Imagebuilder.Types.ListImagesResponse, AWSError>;
  /**
   * Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
   */
  listImages(callback?: (err: AWSError, data: Imagebuilder.Types.ListImagesResponse) => void): Request<Imagebuilder.Types.ListImagesResponse, AWSError>;
  /**
   * Returns a list of infrastructure configurations.
   */
  listInfrastructureConfigurations(params: Imagebuilder.Types.ListInfrastructureConfigurationsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListInfrastructureConfigurationsResponse) => void): Request<Imagebuilder.Types.ListInfrastructureConfigurationsResponse, AWSError>;
  /**
   * Returns a list of infrastructure configurations.
   */
  listInfrastructureConfigurations(callback?: (err: AWSError, data: Imagebuilder.Types.ListInfrastructureConfigurationsResponse) => void): Request<Imagebuilder.Types.ListInfrastructureConfigurationsResponse, AWSError>;
  /**
   * List resources that the runtime instance of the image lifecycle identified for lifecycle actions.
   */
  listLifecycleExecutionResources(params: Imagebuilder.Types.ListLifecycleExecutionResourcesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecycleExecutionResourcesResponse) => void): Request<Imagebuilder.Types.ListLifecycleExecutionResourcesResponse, AWSError>;
  /**
   * List resources that the runtime instance of the image lifecycle identified for lifecycle actions.
   */
  listLifecycleExecutionResources(callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecycleExecutionResourcesResponse) => void): Request<Imagebuilder.Types.ListLifecycleExecutionResourcesResponse, AWSError>;
  /**
   * Get the lifecycle runtime history for the specified resource.
   */
  listLifecycleExecutions(params: Imagebuilder.Types.ListLifecycleExecutionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecycleExecutionsResponse) => void): Request<Imagebuilder.Types.ListLifecycleExecutionsResponse, AWSError>;
  /**
   * Get the lifecycle runtime history for the specified resource.
   */
  listLifecycleExecutions(callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecycleExecutionsResponse) => void): Request<Imagebuilder.Types.ListLifecycleExecutionsResponse, AWSError>;
  /**
   * Get a list of lifecycle policies in your Amazon Web Services account.
   */
  listLifecyclePolicies(params: Imagebuilder.Types.ListLifecyclePoliciesRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecyclePoliciesResponse) => void): Request<Imagebuilder.Types.ListLifecyclePoliciesResponse, AWSError>;
  /**
   * Get a list of lifecycle policies in your Amazon Web Services account.
   */
  listLifecyclePolicies(callback?: (err: AWSError, data: Imagebuilder.Types.ListLifecyclePoliciesResponse) => void): Request<Imagebuilder.Types.ListLifecyclePoliciesResponse, AWSError>;
  /**
   * Returns the list of tags for the specified resource.
   */
  listTagsForResource(params: Imagebuilder.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListTagsForResourceResponse) => void): Request<Imagebuilder.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns the list of tags for the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Imagebuilder.Types.ListTagsForResourceResponse) => void): Request<Imagebuilder.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Get a list of workflow steps that are waiting for action for workflows in your Amazon Web Services account.
   */
  listWaitingWorkflowSteps(params: Imagebuilder.Types.ListWaitingWorkflowStepsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListWaitingWorkflowStepsResponse) => void): Request<Imagebuilder.Types.ListWaitingWorkflowStepsResponse, AWSError>;
  /**
   * Get a list of workflow steps that are waiting for action for workflows in your Amazon Web Services account.
   */
  listWaitingWorkflowSteps(callback?: (err: AWSError, data: Imagebuilder.Types.ListWaitingWorkflowStepsResponse) => void): Request<Imagebuilder.Types.ListWaitingWorkflowStepsResponse, AWSError>;
  /**
   * Returns a list of build versions for a specific workflow resource.
   */
  listWorkflowBuildVersions(params: Imagebuilder.Types.ListWorkflowBuildVersionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowBuildVersionsResponse, AWSError>;
  /**
   * Returns a list of build versions for a specific workflow resource.
   */
  listWorkflowBuildVersions(callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowBuildVersionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowBuildVersionsResponse, AWSError>;
  /**
   * Returns a list of workflow runtime instance metadata objects for a specific image build version.
   */
  listWorkflowExecutions(params: Imagebuilder.Types.ListWorkflowExecutionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowExecutionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowExecutionsResponse, AWSError>;
  /**
   * Returns a list of workflow runtime instance metadata objects for a specific image build version.
   */
  listWorkflowExecutions(callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowExecutionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowExecutionsResponse, AWSError>;
  /**
   * Returns runtime data for each step in a runtime instance of the workflow that you specify in the request.
   */
  listWorkflowStepExecutions(params: Imagebuilder.Types.ListWorkflowStepExecutionsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowStepExecutionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowStepExecutionsResponse, AWSError>;
  /**
   * Returns runtime data for each step in a runtime instance of the workflow that you specify in the request.
   */
  listWorkflowStepExecutions(callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowStepExecutionsResponse) => void): Request<Imagebuilder.Types.ListWorkflowStepExecutionsResponse, AWSError>;
  /**
   * Lists workflow build versions based on filtering parameters.
   */
  listWorkflows(params: Imagebuilder.Types.ListWorkflowsRequest, callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowsResponse) => void): Request<Imagebuilder.Types.ListWorkflowsResponse, AWSError>;
  /**
   * Lists workflow build versions based on filtering parameters.
   */
  listWorkflows(callback?: (err: AWSError, data: Imagebuilder.Types.ListWorkflowsResponse) => void): Request<Imagebuilder.Types.ListWorkflowsResponse, AWSError>;
  /**
   * Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putComponentPolicy(params: Imagebuilder.Types.PutComponentPolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.PutComponentPolicyResponse) => void): Request<Imagebuilder.Types.PutComponentPolicyResponse, AWSError>;
  /**
   * Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putComponentPolicy(callback?: (err: AWSError, data: Imagebuilder.Types.PutComponentPolicyResponse) => void): Request<Imagebuilder.Types.PutComponentPolicyResponse, AWSError>;
  /**
   * Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API PutContainerImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putContainerRecipePolicy(params: Imagebuilder.Types.PutContainerRecipePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.PutContainerRecipePolicyResponse) => void): Request<Imagebuilder.Types.PutContainerRecipePolicyResponse, AWSError>;
  /**
   * Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API PutContainerImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putContainerRecipePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.PutContainerRecipePolicyResponse) => void): Request<Imagebuilder.Types.PutContainerRecipePolicyResponse, AWSError>;
  /**
   * Applies a policy to an image. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putImagePolicy(params: Imagebuilder.Types.PutImagePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.PutImagePolicyResponse) => void): Request<Imagebuilder.Types.PutImagePolicyResponse, AWSError>;
  /**
   * Applies a policy to an image. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putImagePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.PutImagePolicyResponse) => void): Request<Imagebuilder.Types.PutImagePolicyResponse, AWSError>;
  /**
   * Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putImageRecipePolicy(params: Imagebuilder.Types.PutImageRecipePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.PutImageRecipePolicyResponse) => void): Request<Imagebuilder.Types.PutImageRecipePolicyResponse, AWSError>;
  /**
   * Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.
   */
  putImageRecipePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.PutImageRecipePolicyResponse) => void): Request<Imagebuilder.Types.PutImageRecipePolicyResponse, AWSError>;
  /**
   * Pauses or resumes image creation when the associated workflow runs a WaitForAction step.
   */
  sendWorkflowStepAction(params: Imagebuilder.Types.SendWorkflowStepActionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.SendWorkflowStepActionResponse) => void): Request<Imagebuilder.Types.SendWorkflowStepActionResponse, AWSError>;
  /**
   * Pauses or resumes image creation when the associated workflow runs a WaitForAction step.
   */
  sendWorkflowStepAction(callback?: (err: AWSError, data: Imagebuilder.Types.SendWorkflowStepActionResponse) => void): Request<Imagebuilder.Types.SendWorkflowStepActionResponse, AWSError>;
  /**
   * Manually triggers a pipeline to create an image.
   */
  startImagePipelineExecution(params: Imagebuilder.Types.StartImagePipelineExecutionRequest, callback?: (err: AWSError, data: Imagebuilder.Types.StartImagePipelineExecutionResponse) => void): Request<Imagebuilder.Types.StartImagePipelineExecutionResponse, AWSError>;
  /**
   * Manually triggers a pipeline to create an image.
   */
  startImagePipelineExecution(callback?: (err: AWSError, data: Imagebuilder.Types.StartImagePipelineExecutionResponse) => void): Request<Imagebuilder.Types.StartImagePipelineExecutionResponse, AWSError>;
  /**
   * Begin asynchronous resource state update for lifecycle changes to the specified image resources.
   */
  startResourceStateUpdate(params: Imagebuilder.Types.StartResourceStateUpdateRequest, callback?: (err: AWSError, data: Imagebuilder.Types.StartResourceStateUpdateResponse) => void): Request<Imagebuilder.Types.StartResourceStateUpdateResponse, AWSError>;
  /**
   * Begin asynchronous resource state update for lifecycle changes to the specified image resources.
   */
  startResourceStateUpdate(callback?: (err: AWSError, data: Imagebuilder.Types.StartResourceStateUpdateResponse) => void): Request<Imagebuilder.Types.StartResourceStateUpdateResponse, AWSError>;
  /**
   * Adds a tag to a resource.
   */
  tagResource(params: Imagebuilder.Types.TagResourceRequest, callback?: (err: AWSError, data: Imagebuilder.Types.TagResourceResponse) => void): Request<Imagebuilder.Types.TagResourceResponse, AWSError>;
  /**
   * Adds a tag to a resource.
   */
  tagResource(callback?: (err: AWSError, data: Imagebuilder.Types.TagResourceResponse) => void): Request<Imagebuilder.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(params: Imagebuilder.Types.UntagResourceRequest, callback?: (err: AWSError, data: Imagebuilder.Types.UntagResourceResponse) => void): Request<Imagebuilder.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(callback?: (err: AWSError, data: Imagebuilder.Types.UntagResourceResponse) => void): Request<Imagebuilder.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
   */
  updateDistributionConfiguration(params: Imagebuilder.Types.UpdateDistributionConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.UpdateDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.UpdateDistributionConfigurationResponse, AWSError>;
  /**
   * Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
   */
  updateDistributionConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.UpdateDistributionConfigurationResponse) => void): Request<Imagebuilder.Types.UpdateDistributionConfigurationResponse, AWSError>;
  /**
   * Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn.  UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed. 
   */
  updateImagePipeline(params: Imagebuilder.Types.UpdateImagePipelineRequest, callback?: (err: AWSError, data: Imagebuilder.Types.UpdateImagePipelineResponse) => void): Request<Imagebuilder.Types.UpdateImagePipelineResponse, AWSError>;
  /**
   * Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn.  UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed. 
   */
  updateImagePipeline(callback?: (err: AWSError, data: Imagebuilder.Types.UpdateImagePipelineResponse) => void): Request<Imagebuilder.Types.UpdateImagePipelineResponse, AWSError>;
  /**
   * Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
   */
  updateInfrastructureConfiguration(params: Imagebuilder.Types.UpdateInfrastructureConfigurationRequest, callback?: (err: AWSError, data: Imagebuilder.Types.UpdateInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.UpdateInfrastructureConfigurationResponse, AWSError>;
  /**
   * Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
   */
  updateInfrastructureConfiguration(callback?: (err: AWSError, data: Imagebuilder.Types.UpdateInfrastructureConfigurationResponse) => void): Request<Imagebuilder.Types.UpdateInfrastructureConfigurationResponse, AWSError>;
  /**
   * Update the specified lifecycle policy.
   */
  updateLifecyclePolicy(params: Imagebuilder.Types.UpdateLifecyclePolicyRequest, callback?: (err: AWSError, data: Imagebuilder.Types.UpdateLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.UpdateLifecyclePolicyResponse, AWSError>;
  /**
   * Update the specified lifecycle policy.
   */
  updateLifecyclePolicy(callback?: (err: AWSError, data: Imagebuilder.Types.UpdateLifecyclePolicyResponse) => void): Request<Imagebuilder.Types.UpdateLifecyclePolicyResponse, AWSError>;
}
declare namespace Imagebuilder {
  export interface AccountAggregation {
    /**
     * Identifies the account that owns the aggregated resource findings.
     */
    accountId?: NonEmptyString;
    /**
     * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings.
     */
    severityCounts?: SeverityCounts;
  }
  export type AccountId = string;
  export type AccountList = AccountId[];
  export interface AdditionalInstanceConfiguration {
    /**
     * Contains settings for the Systems Manager agent on your build instance.
     */
    systemsManagerAgent?: SystemsManagerAgent;
    /**
     * Use this property to provide commands or a command script to run when you launch your build instance. The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.  The user data is always base 64 encoded. For example, the following commands are encoded as IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$:  #!/bin/bash  mkdir -p /var/bb/ touch /var 
     */
    userDataOverride?: UserDataOverride;
  }
  export interface Ami {
    /**
     * The Amazon Web Services Region of the Amazon EC2 AMI.
     */
    region?: NonEmptyString;
    /**
     * The AMI ID of the Amazon EC2 AMI.
     */
    image?: NonEmptyString;
    /**
     * The name of the Amazon EC2 AMI.
     */
    name?: NonEmptyString;
    /**
     * The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.
     */
    description?: NonEmptyString;
    state?: ImageState;
    /**
     * The account ID of the owner of the AMI.
     */
    accountId?: NonEmptyString;
  }
  export interface AmiDistributionConfiguration {
    /**
     * The name of the output AMI.
     */
    name?: AmiNameString;
    /**
     * The description of the AMI distribution configuration. Minimum and maximum length are in characters.
     */
    description?: NonEmptyString;
    /**
     * The ID of an account to which you want to distribute an image.
     */
    targetAccountIds?: AccountList;
    /**
     * The tags to apply to AMIs distributed to this Region.
     */
    amiTags?: TagMap;
    /**
     * The KMS key identifier used to encrypt the distributed image.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to launch instances.
     */
    launchPermission?: LaunchPermissionConfiguration;
  }
  export type AmiList = Ami[];
  export type AmiNameString = string;
  export type Arn = string;
  export type Boolean = boolean;
  export type BuildType = "USER_INITIATED"|"SCHEDULED"|"IMPORT"|string;
  export interface CancelImageCreationRequest {
    /**
     * The Amazon Resource Name (ARN) of the image that you want to cancel creation for.
     */
    imageBuildVersionArn: ImageBuildVersionArn;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CancelImageCreationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The ARN of the image whose creation this request canceled.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
  }
  export interface CancelLifecycleExecutionRequest {
    /**
     * Identifies the specific runtime instance of the image lifecycle to cancel.
     */
    lifecycleExecutionId: LifecycleExecutionId;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CancelLifecycleExecutionResponse {
    /**
     * The unique identifier for the image lifecycle runtime instance that was canceled.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
  }
  export type ClientToken = string;
  export interface Component {
    /**
     * The Amazon Resource Name (ARN) of the component.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the component.
     */
    name?: ResourceName;
    /**
     * The version of the component.
     */
    version?: VersionNumber;
    /**
     * The description of the component.
     */
    description?: NonEmptyString;
    /**
     * Describes what change has been made in this version of the component, or what makes this version different from other versions of the component.
     */
    changeDescription?: NonEmptyString;
    /**
     * The component type specifies whether Image Builder uses the component to build the image or only to test it.
     */
    type?: ComponentType;
    /**
     * The operating system platform of the component.
     */
    platform?: Platform;
    /**
     * The operating system (OS) version supported by the component. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.
     */
    supportedOsVersions?: OsVersionList;
    /**
     * Describes the current status of the component. This is used for components that are no longer active.
     */
    state?: ComponentState;
    /**
     * Contains parameter details for each of the parameters that the component document defined for the component.
     */
    parameters?: ComponentParameterDetailList;
    /**
     * The owner of the component.
     */
    owner?: NonEmptyString;
    /**
     * Component data contains the YAML document content for the component.
     */
    data?: ComponentData;
    /**
     * The KMS key identifier used to encrypt the component.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * The encryption status of the component.
     */
    encrypted?: NullableBoolean;
    /**
     * The date that Image Builder created the component.
     */
    dateCreated?: DateTime;
    /**
     * The tags that apply to the component.
     */
    tags?: TagMap;
    /**
     * Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.
     */
    publisher?: NonEmptyString;
    /**
     * Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.
     */
    obfuscate?: Boolean;
  }
  export type ComponentBuildVersionArn = string;
  export interface ComponentConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the component.
     */
    componentArn: ComponentVersionArnOrBuildVersionArn;
    /**
     * A group of parameter settings that Image Builder uses to configure the component for a specific recipe.
     */
    parameters?: ComponentParameterList;
  }
  export type ComponentConfigurationList = ComponentConfiguration[];
  export type ComponentData = string;
  export type ComponentFormat = "SHELL"|string;
  export interface ComponentParameter {
    /**
     * The name of the component parameter to set.
     */
    name: ComponentParameterName;
    /**
     * Sets the value for the named component parameter.
     */
    value: ComponentParameterValueList;
  }
  export type ComponentParameterDescription = string;
  export interface ComponentParameterDetail {
    /**
     * The name of this input parameter.
     */
    name: ComponentParameterName;
    /**
     * The type of input this parameter provides. The currently supported value is "string".
     */
    type: ComponentParameterType;
    /**
     * The default value of this parameter if no input is provided.
     */
    defaultValue?: ComponentParameterValueList;
    /**
     * Describes this parameter.
     */
    description?: ComponentParameterDescription;
  }
  export type ComponentParameterDetailList = ComponentParameterDetail[];
  export type ComponentParameterList = ComponentParameter[];
  export type ComponentParameterName = string;
  export type ComponentParameterType = string;
  export type ComponentParameterValue = string;
  export type ComponentParameterValueList = ComponentParameterValue[];
  export interface ComponentState {
    /**
     * The current state of the component.
     */
    status?: ComponentStatus;
    /**
     * Describes how or why the component changed state.
     */
    reason?: NonEmptyString;
  }
  export type ComponentStatus = "DEPRECATED"|string;
  export interface ComponentSummary {
    /**
     * The Amazon Resource Name (ARN) of the component.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the component.
     */
    name?: ResourceName;
    /**
     * The version of the component.
     */
    version?: VersionNumber;
    /**
     * The operating system platform of the component.
     */
    platform?: Platform;
    /**
     * The operating system (OS) version that the component supports. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.
     */
    supportedOsVersions?: OsVersionList;
    /**
     * Describes the current status of the component.
     */
    state?: ComponentState;
    /**
     * The component type specifies whether Image Builder uses the component to build the image or only to test it.
     */
    type?: ComponentType;
    /**
     * The owner of the component.
     */
    owner?: NonEmptyString;
    /**
     * The description of the component.
     */
    description?: NonEmptyString;
    /**
     * The change description for the current version of the component.
     */
    changeDescription?: NonEmptyString;
    /**
     * The original creation date of the component.
     */
    dateCreated?: DateTime;
    /**
     * The tags that apply to the component.
     */
    tags?: TagMap;
    /**
     * Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.
     */
    publisher?: NonEmptyString;
    /**
     * Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.
     */
    obfuscate?: Boolean;
  }
  export type ComponentSummaryList = ComponentSummary[];
  export type ComponentType = "BUILD"|"TEST"|string;
  export interface ComponentVersion {
    /**
     * The Amazon Resource Name (ARN) of the component.  Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:   Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.   Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;   Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.   
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the component.
     */
    name?: ResourceName;
    /**
     * The semantic version of the component.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    version?: VersionNumber;
    /**
     * The description of the component.
     */
    description?: NonEmptyString;
    /**
     * The platform of the component.
     */
    platform?: Platform;
    /**
     * he operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
     */
    supportedOsVersions?: OsVersionList;
    /**
     * The type of the component denotes whether the component is used to build the image or only to test it.
     */
    type?: ComponentType;
    /**
     * The owner of the component.
     */
    owner?: NonEmptyString;
    /**
     * The date that the component was created.
     */
    dateCreated?: DateTime;
  }
  export type ComponentVersionArn = string;
  export type ComponentVersionArnOrBuildVersionArn = string;
  export type ComponentVersionList = ComponentVersion[];
  export interface Container {
    /**
     * Containers and container images are Region-specific. This is the Region context for the container.
     */
    region?: NonEmptyString;
    /**
     * A list of URIs for containers created in the context Region.
     */
    imageUris?: StringList;
  }
  export interface ContainerDistributionConfiguration {
    /**
     * The description of the container distribution configuration.
     */
    description?: NonEmptyString;
    /**
     * Tags that are attached to the container distribution configuration.
     */
    containerTags?: StringList;
    /**
     * The destination repository for the container distribution configuration.
     */
    targetRepository: TargetContainerRepository;
  }
  export type ContainerList = Container[];
  export interface ContainerRecipe {
    /**
     * The Amazon Resource Name (ARN) of the container recipe.  Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:   Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.   Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;   Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.   
     */
    arn?: ImageBuilderArn;
    /**
     * Specifies the type of container, such as Docker.
     */
    containerType?: ContainerType;
    /**
     * The name of the container recipe.
     */
    name?: ResourceName;
    /**
     * The description of the container recipe.
     */
    description?: NonEmptyString;
    /**
     * The system platform for the container, such as Windows or Linux.
     */
    platform?: Platform;
    /**
     * The owner of the container recipe.
     */
    owner?: NonEmptyString;
    /**
     * The semantic version of the container recipe.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    version?: VersionNumber;
    /**
     * Build and test components that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
     */
    components?: ComponentConfigurationList;
    /**
     * A group of options that can be used to configure an instance for building and testing container images.
     */
    instanceConfiguration?: InstanceConfiguration;
    /**
     * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
     */
    dockerfileTemplateData?: DockerFileTemplate;
    /**
     * Identifies which KMS key is used to encrypt the container image for distribution to the target Region.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * A flag that indicates if the target container is encrypted.
     */
    encrypted?: NullableBoolean;
    /**
     * The base image for the container recipe.
     */
    parentImage?: NonEmptyString;
    /**
     * The date when this container recipe was created.
     */
    dateCreated?: DateTime;
    /**
     * Tags that are attached to the container recipe.
     */
    tags?: TagMap;
    /**
     * The working directory for use during build and test workflows.
     */
    workingDirectory?: NonEmptyString;
    /**
     * The destination repository for the container image.
     */
    targetRepository?: TargetContainerRepository;
  }
  export type ContainerRecipeArn = string;
  export interface ContainerRecipeSummary {
    /**
     * The Amazon Resource Name (ARN) of the container recipe.
     */
    arn?: ImageBuilderArn;
    /**
     * Specifies the type of container, such as "Docker".
     */
    containerType?: ContainerType;
    /**
     * The name of the container recipe.
     */
    name?: ResourceName;
    /**
     * The system platform for the container, such as Windows or Linux.
     */
    platform?: Platform;
    /**
     * The owner of the container recipe.
     */
    owner?: NonEmptyString;
    /**
     * The base image for the container recipe.
     */
    parentImage?: NonEmptyString;
    /**
     * The date when this container recipe was created.
     */
    dateCreated?: DateTime;
    /**
     * Tags that are attached to the container recipe.
     */
    tags?: TagMap;
  }
  export type ContainerRecipeSummaryList = ContainerRecipeSummary[];
  export type ContainerRepositoryService = "ECR"|string;
  export type ContainerType = "DOCKER"|string;
  export interface CreateComponentRequest {
    /**
     * The name of the component.
     */
    name: ResourceName;
    /**
     * The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. 
     */
    semanticVersion: VersionNumber;
    /**
     * Describes the contents of the component.
     */
    description?: NonEmptyString;
    /**
     * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of the component.
     */
    changeDescription?: NonEmptyString;
    /**
     * The operating system platform of the component.
     */
    platform: Platform;
    /**
     * The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
     */
    supportedOsVersions?: OsVersionList;
    /**
     * Component data contains inline YAML document content for the component. Alternatively, you can specify the uri of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     */
    data?: InlineComponentData;
    /**
     * The uri of a YAML component document file. This must be an S3 URL (s3://bucket/key), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota. Alternatively, you can specify the YAML document inline, using the component data property. You cannot specify both properties.
     */
    uri?: Uri;
    /**
     * The ID of the KMS key that is used to encrypt this component.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * The tags that apply to the component.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateComponentResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the component that the request created.
     */
    componentBuildVersionArn?: ComponentBuildVersionArn;
  }
  export interface CreateContainerRecipeRequest {
    /**
     * The type of container to create.
     */
    containerType: ContainerType;
    /**
     * The name of the container recipe.
     */
    name: ResourceName;
    /**
     * The description of the container recipe.
     */
    description?: NonEmptyString;
    /**
     * The semantic version of the container recipe. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. 
     */
    semanticVersion: VersionNumber;
    /**
     * Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
     */
    components: ComponentConfigurationList;
    /**
     * A group of options that can be used to configure an instance for building and testing container images.
     */
    instanceConfiguration?: InstanceConfiguration;
    /**
     * The Dockerfile template used to build your image as an inline data blob.
     */
    dockerfileTemplateData?: InlineDockerFileTemplate;
    /**
     * The Amazon S3 URI for the Dockerfile that will be used to build your container image.
     */
    dockerfileTemplateUri?: Uri;
    /**
     * Specifies the operating system platform when you use a custom base image.
     */
    platformOverride?: Platform;
    /**
     * Specifies the operating system version for the base image.
     */
    imageOsVersionOverride?: NonEmptyString;
    /**
     * The base image for the container recipe.
     */
    parentImage: NonEmptyString;
    /**
     * Tags that are attached to the container recipe.
     */
    tags?: TagMap;
    /**
     * The working directory for use during build and test workflows.
     */
    workingDirectory?: NonEmptyString;
    /**
     * The destination repository for the container image.
     */
    targetRepository: TargetContainerRepository;
    /**
     * Identifies which KMS key is used to encrypt the container image.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateContainerRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * Returns the Amazon Resource Name (ARN) of the container recipe that the request created.
     */
    containerRecipeArn?: ContainerRecipeArn;
  }
  export interface CreateDistributionConfigurationRequest {
    /**
     * The name of the distribution configuration.
     */
    name: ResourceName;
    /**
     * The description of the distribution configuration.
     */
    description?: NonEmptyString;
    /**
     * The distributions of the distribution configuration.
     */
    distributions: DistributionList;
    /**
     * The tags of the distribution configuration.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateDistributionConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that was created by this request.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
  }
  export interface CreateImagePipelineRequest {
    /**
     * The name of the image pipeline.
     */
    name: ResourceName;
    /**
     * The description of the image pipeline.
     */
    description?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.
     */
    imageRecipeArn?: ImageRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.
     */
    containerRecipeArn?: ContainerRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
    /**
     * The image test configuration of the image pipeline.
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: NullableBoolean;
    /**
     * The schedule of the image pipeline.
     */
    schedule?: Schedule;
    /**
     * The status of the image pipeline.
     */
    status?: PipelineStatus;
    /**
     * The tags of the image pipeline.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    /**
     * Contains an array of workflow configuration objects.
     */
    workflows?: WorkflowConfigurationList;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: RoleNameOrArn;
  }
  export interface CreateImagePipelineResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that was created by this request.
     */
    imagePipelineArn?: ImagePipelineArn;
  }
  export interface CreateImageRecipeRequest {
    /**
     * The name of the image recipe.
     */
    name: ResourceName;
    /**
     * The description of the image recipe.
     */
    description?: NonEmptyString;
    /**
     * The semantic version of the image recipe. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. 
     */
    semanticVersion: VersionNumber;
    /**
     * The components included in the image recipe.
     */
    components: ComponentConfigurationList;
    /**
     * The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
     */
    parentImage: NonEmptyString;
    /**
     * The block device mappings of the image recipe.
     */
    blockDeviceMappings?: InstanceBlockDeviceMappings;
    /**
     * The tags of the image recipe.
     */
    tags?: TagMap;
    /**
     * The working directory used during build and test workflows.
     */
    workingDirectory?: NonEmptyString;
    /**
     * Specify additional settings and launch scripts for your build instances.
     */
    additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateImageRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that was created by this request.
     */
    imageRecipeArn?: ImageRecipeArn;
  }
  export interface CreateImageRequest {
    /**
     * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     */
    imageRecipeArn?: ImageRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     */
    containerRecipeArn?: ContainerRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
    /**
     * The image tests configuration of the image.
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: NullableBoolean;
    /**
     * The tags of the image.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    /**
     * Contains an array of workflow configuration objects.
     */
    workflows?: WorkflowConfigurationList;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: RoleNameOrArn;
  }
  export interface CreateImageResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the image that the request created.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
  }
  export interface CreateInfrastructureConfigurationRequest {
    /**
     * The name of the infrastructure configuration.
     */
    name: ResourceName;
    /**
     * The description of the infrastructure configuration.
     */
    description?: NonEmptyString;
    /**
     * The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.
     */
    instanceTypes?: InstanceTypeList;
    /**
     * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
     */
    instanceProfileName: InstanceProfileNameType;
    /**
     * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
     */
    securityGroupIds?: SecurityGroupIds;
    /**
     * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
     */
    subnetId?: NonEmptyString;
    /**
     * The logging configuration of the infrastructure configuration.
     */
    logging?: Logging;
    /**
     * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
     */
    keyPair?: NonEmptyString;
    /**
     * The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.
     */
    terminateInstanceOnFailure?: NullableBoolean;
    /**
     * The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.  EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under. 
     */
    snsTopicArn?: SnsTopicArn;
    /**
     * The tags attached to the resource created by Image Builder.
     */
    resourceTags?: ResourceTagMap;
    /**
     * The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances.
     */
    instanceMetadataOptions?: InstanceMetadataOptions;
    /**
     * The tags of the infrastructure configuration.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateInfrastructureConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that was created by this request.
     */
    infrastructureConfigurationArn?: InfrastructureConfigurationArn;
  }
  export interface CreateLifecyclePolicyRequest {
    /**
     * The name of the lifecycle policy to create.
     */
    name: ResourceName;
    /**
     * Optional description for the lifecycle policy.
     */
    description?: NonEmptyString;
    /**
     * Indicates whether the lifecycle policy resource is enabled.
     */
    status?: LifecyclePolicyStatus;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions.
     */
    executionRole: RoleNameOrArn;
    /**
     * The type of Image Builder resource that the lifecycle policy applies to.
     */
    resourceType: LifecyclePolicyResourceType;
    /**
     * Configuration details for the lifecycle policy rules.
     */
    policyDetails: LifecyclePolicyDetails;
    /**
     * Selection criteria for the resources that the lifecycle policy applies to. 
     */
    resourceSelection: LifecyclePolicyResourceSelection;
    /**
     * Tags to apply to the lifecycle policy resource.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface CreateLifecyclePolicyResponse {
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy that the request created.
     */
    lifecyclePolicyArn?: LifecyclePolicyArn;
  }
  export interface CreateWorkflowRequest {
    /**
     * The name of the workflow to create.
     */
    name: ResourceName;
    /**
     * The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. 
     */
    semanticVersion: VersionNumber;
    /**
     * Describes the workflow.
     */
    description?: NonEmptyString;
    /**
     * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
     */
    changeDescription?: NonEmptyString;
    /**
     * Contains the UTF-8 encoded YAML document content for the workflow. Alternatively, you can specify the uri of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     */
    data?: InlineWorkflowData;
    /**
     * The uri of a YAML component document file. This must be an S3 URL (s3://bucket/key), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota. Alternatively, you can specify the YAML document inline, using the component data property. You cannot specify both properties.
     */
    uri?: Uri;
    /**
     * The ID of the KMS key that is used to encrypt this workflow resource.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * Tags that apply to the workflow resource.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
    /**
     * The phase in the image build process for which the workflow resource is responsible.
     */
    type: WorkflowType;
  }
  export interface CreateWorkflowResponse {
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the workflow resource that the request created.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
  }
  export interface CvssScore {
    /**
     * The CVSS base score.
     */
    baseScore?: NonNegativeDouble;
    /**
     * The vector string of the CVSS score.
     */
    scoringVector?: NonEmptyString;
    /**
     * The CVSS version that generated the score.
     */
    version?: NonEmptyString;
    /**
     * The source of the CVSS score.
     */
    source?: NonEmptyString;
  }
  export interface CvssScoreAdjustment {
    /**
     * The metric that Amazon Inspector used to adjust the CVSS score.
     */
    metric?: NonEmptyString;
    /**
     * The reason for the CVSS score adjustment.
     */
    reason?: NonEmptyString;
  }
  export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
  export interface CvssScoreDetails {
    /**
     * The source for the CVSS score.
     */
    scoreSource?: NonEmptyString;
    /**
     * The source of the finding.
     */
    cvssSource?: NonEmptyString;
    /**
     * The CVSS version that generated the score.
     */
    version?: NonEmptyString;
    /**
     * The CVSS score.
     */
    score?: NonNegativeDouble;
    /**
     * A vector that measures the severity of the vulnerability.
     */
    scoringVector?: NonEmptyString;
    /**
     * An object that contains details about an adjustment that Amazon Inspector made to the CVSS score for the finding.
     */
    adjustments?: CvssScoreAdjustmentList;
  }
  export type CvssScoreList = CvssScore[];
  export type DateTime = string;
  export type DateTimeTimestamp = Date;
  export interface DeleteComponentRequest {
    /**
     * The Amazon Resource Name (ARN) of the component build version to delete.
     */
    componentBuildVersionArn: ComponentBuildVersionArn;
  }
  export interface DeleteComponentResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The ARN of the component build version that this request deleted.
     */
    componentBuildVersionArn?: ComponentBuildVersionArn;
  }
  export interface DeleteContainerRecipeRequest {
    /**
     * The Amazon Resource Name (ARN) of the container recipe to delete.
     */
    containerRecipeArn: ContainerRecipeArn;
  }
  export interface DeleteContainerRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that was deleted.
     */
    containerRecipeArn?: ContainerRecipeArn;
  }
  export interface DeleteDistributionConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration to delete.
     */
    distributionConfigurationArn: DistributionConfigurationArn;
  }
  export interface DeleteDistributionConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that was deleted.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
  }
  export interface DeleteImagePipelineRequest {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline to delete.
     */
    imagePipelineArn: ImagePipelineArn;
  }
  export interface DeleteImagePipelineResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that was deleted.
     */
    imagePipelineArn?: ImagePipelineArn;
  }
  export interface DeleteImageRecipeRequest {
    /**
     * The Amazon Resource Name (ARN) of the image recipe to delete.
     */
    imageRecipeArn: ImageRecipeArn;
  }
  export interface DeleteImageRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that was deleted.
     */
    imageRecipeArn?: ImageRecipeArn;
  }
  export interface DeleteImageRequest {
    /**
     * The Amazon Resource Name (ARN) of the Image Builder image resource to delete.
     */
    imageBuildVersionArn: ImageBuildVersionArn;
  }
  export interface DeleteImageResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The ARN of the Image Builder image resource that this request deleted.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
  }
  export interface DeleteInfrastructureConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration to delete.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
  }
  export interface DeleteInfrastructureConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted.
     */
    infrastructureConfigurationArn?: InfrastructureConfigurationArn;
  }
  export interface DeleteLifecyclePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy resource to delete.
     */
    lifecyclePolicyArn: LifecyclePolicyArn;
  }
  export interface DeleteLifecyclePolicyResponse {
    /**
     * The ARN of the lifecycle policy that was deleted.
     */
    lifecyclePolicyArn?: LifecyclePolicyArn;
  }
  export interface DeleteWorkflowRequest {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource to delete.
     */
    workflowBuildVersionArn: WorkflowBuildVersionArn;
  }
  export interface DeleteWorkflowResponse {
    /**
     * The ARN of the workflow resource that this request deleted.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
  }
  export type DiskImageFormat = "VMDK"|"RAW"|"VHD"|string;
  export interface Distribution {
    /**
     * The target Region.
     */
    region: NonEmptyString;
    /**
     * The specific AMI settings; for example, launch permissions or AMI tags.
     */
    amiDistributionConfiguration?: AmiDistributionConfiguration;
    /**
     * Container distribution settings for encryption, licensing, and sharing in a specific Region.
     */
    containerDistributionConfiguration?: ContainerDistributionConfiguration;
    /**
     * The License Manager Configuration to associate with the AMI in the specified Region.
     */
    licenseConfigurationArns?: LicenseConfigurationArnList;
    /**
     * A group of launchTemplateConfiguration settings that apply to image distribution for specified accounts.
     */
    launchTemplateConfigurations?: LaunchTemplateConfigurationList;
    /**
     * Configure export settings to deliver disk images created from your image build, using a file format that is compatible with your VMs in that Region.
     */
    s3ExportConfiguration?: S3ExportConfiguration;
    /**
     * The Windows faster-launching configurations to use for AMI distribution.
     */
    fastLaunchConfigurations?: FastLaunchConfigurationList;
  }
  export interface DistributionConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the distribution configuration.
     */
    name?: ResourceName;
    /**
     * The description of the distribution configuration.
     */
    description?: NonEmptyString;
    /**
     * The distribution objects that apply Region-specific settings for the deployment of the image to targeted Regions.
     */
    distributions?: DistributionList;
    /**
     * The maximum duration in minutes for this distribution configuration.
     */
    timeoutMinutes: DistributionTimeoutMinutes;
    /**
     * The date on which this distribution configuration was created.
     */
    dateCreated?: DateTime;
    /**
     * The date on which this distribution configuration was last updated.
     */
    dateUpdated?: DateTime;
    /**
     * The tags of the distribution configuration.
     */
    tags?: TagMap;
  }
  export type DistributionConfigurationArn = string;
  export interface DistributionConfigurationSummary {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the distribution configuration.
     */
    name?: ResourceName;
    /**
     * The description of the distribution configuration.
     */
    description?: NonEmptyString;
    /**
     * The date on which the distribution configuration was created.
     */
    dateCreated?: DateTime;
    /**
     * The date on which the distribution configuration was updated.
     */
    dateUpdated?: DateTime;
    /**
     * The tags associated with the distribution configuration.
     */
    tags?: TagMap;
    /**
     * A list of Regions where the container image is distributed to.
     */
    regions?: RegionList;
  }
  export type DistributionConfigurationSummaryList = DistributionConfigurationSummary[];
  export type DistributionList = Distribution[];
  export type DistributionTimeoutMinutes = number;
  export type DockerFileTemplate = string;
  export interface EbsInstanceBlockDeviceSpecification {
    /**
     * Use to configure device encryption.
     */
    encrypted?: NullableBoolean;
    /**
     * Use to configure delete on termination of the associated device.
     */
    deleteOnTermination?: NullableBoolean;
    /**
     * Use to configure device IOPS.
     */
    iops?: EbsIopsInteger;
    /**
     * Use to configure the KMS key to use when encrypting the device.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * The snapshot that defines the device contents.
     */
    snapshotId?: NonEmptyString;
    /**
     * Use to override the device's volume size.
     */
    volumeSize?: EbsVolumeSizeInteger;
    /**
     * Use to override the device's volume type.
     */
    volumeType?: EbsVolumeType;
    /**
     *  For GP3 volumes only – The throughput in MiB/s that the volume supports.
     */
    throughput?: EbsVolumeThroughput;
  }
  export type EbsIopsInteger = number;
  export type EbsVolumeSizeInteger = number;
  export type EbsVolumeThroughput = number;
  export type EbsVolumeType = "standard"|"io1"|"io2"|"gp2"|"gp3"|"sc1"|"st1"|string;
  export interface EcrConfiguration {
    /**
     * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository for vulnerability scans of your output container images.
     */
    repositoryName?: NonEmptyString;
    /**
     * Tags for Image Builder to apply to the output container image that &amp;INS; scans. Tags can help you identify and manage your scanned images.
     */
    containerTags?: StringList;
  }
  export type EmptyString = string;
  export interface FastLaunchConfiguration {
    /**
     * A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it.
     */
    enabled: Boolean;
    /**
     * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
     */
    snapshotConfiguration?: FastLaunchSnapshotConfiguration;
    /**
     * The maximum number of parallel instances that are launched for creating resources.
     */
    maxParallelLaunches?: MaxParallelLaunches;
    /**
     * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
     */
    launchTemplate?: FastLaunchLaunchTemplateSpecification;
    /**
     * The owner account ID for the fast-launch enabled Windows AMI.
     */
    accountId?: AccountId;
  }
  export type FastLaunchConfigurationList = FastLaunchConfiguration[];
  export interface FastLaunchLaunchTemplateSpecification {
    /**
     * The ID of the launch template to use for faster launching for a Windows AMI.
     */
    launchTemplateId?: LaunchTemplateId;
    /**
     * The name of the launch template to use for faster launching for a Windows AMI.
     */
    launchTemplateName?: NonEmptyString;
    /**
     * The version of the launch template to use for faster launching for a Windows AMI.
     */
    launchTemplateVersion?: NonEmptyString;
  }
  export interface FastLaunchSnapshotConfiguration {
    /**
     * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
     */
    targetResourceCount?: TargetResourceCount;
  }
  export interface Filter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    name?: FilterName;
    /**
     * The filter values. Filter values are case-sensitive.
     */
    values?: FilterValues;
  }
  export type FilterList = Filter[];
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export interface GetComponentPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.
     */
    componentArn: ComponentBuildVersionArn;
  }
  export interface GetComponentPolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The component policy.
     */
    policy?: ResourcePolicyDocument;
  }
  export interface GetComponentRequest {
    /**
     * The Amazon Resource Name (ARN) of the component that you want to get. Regex requires the suffix /\d+$.
     */
    componentBuildVersionArn: ComponentVersionArnOrBuildVersionArn;
  }
  export interface GetComponentResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The component object specified in the request.
     */
    component?: Component;
  }
  export interface GetContainerRecipePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the container recipe for the policy being requested.
     */
    containerRecipeArn: ContainerRecipeArn;
  }
  export interface GetContainerRecipePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The container recipe policy object that is returned.
     */
    policy?: ResourcePolicyDocument;
  }
  export interface GetContainerRecipeRequest {
    /**
     * The Amazon Resource Name (ARN) of the container recipe to retrieve.
     */
    containerRecipeArn: ContainerRecipeArn;
  }
  export interface GetContainerRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The container recipe object that is returned.
     */
    containerRecipe?: ContainerRecipe;
  }
  export interface GetDistributionConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.
     */
    distributionConfigurationArn: DistributionConfigurationArn;
  }
  export interface GetDistributionConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The distribution configuration object.
     */
    distributionConfiguration?: DistributionConfiguration;
  }
  export interface GetImagePipelineRequest {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.
     */
    imagePipelineArn: ImagePipelineArn;
  }
  export interface GetImagePipelineResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image pipeline object.
     */
    imagePipeline?: ImagePipeline;
  }
  export interface GetImagePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.
     */
    imageArn: ImageBuildVersionArn;
  }
  export interface GetImagePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image policy object.
     */
    policy?: ResourcePolicyDocument;
  }
  export interface GetImageRecipePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.
     */
    imageRecipeArn: ImageRecipeArn;
  }
  export interface GetImageRecipePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image recipe policy object.
     */
    policy?: ResourcePolicyDocument;
  }
  export interface GetImageRecipeRequest {
    /**
     * The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.
     */
    imageRecipeArn: ImageRecipeArn;
  }
  export interface GetImageRecipeResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image recipe object.
     */
    imageRecipe?: ImageRecipe;
  }
  export interface GetImageRequest {
    /**
     * The Amazon Resource Name (ARN) of the image that you want to get.
     */
    imageBuildVersionArn: ImageVersionArnOrBuildVersionArn;
  }
  export interface GetImageResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image object.
     */
    image?: Image;
  }
  export interface GetInfrastructureConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
  }
  export interface GetInfrastructureConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The infrastructure configuration object.
     */
    infrastructureConfiguration?: InfrastructureConfiguration;
  }
  export interface GetLifecycleExecutionRequest {
    /**
     * Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details.
     */
    lifecycleExecutionId: LifecycleExecutionId;
  }
  export interface GetLifecycleExecutionResponse {
    /**
     * Runtime details for the specified runtime instance of the lifecycle policy.
     */
    lifecycleExecution?: LifecycleExecution;
  }
  export interface GetLifecyclePolicyRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the image lifecycle policy resource to get.
     */
    lifecyclePolicyArn: LifecyclePolicyArn;
  }
  export interface GetLifecyclePolicyResponse {
    /**
     * The ARN of the image lifecycle policy resource that was returned.
     */
    lifecyclePolicy?: LifecyclePolicy;
  }
  export interface GetWorkflowExecutionRequest {
    /**
     * Use the unique identifier for a runtime instance of the workflow to get runtime details.
     */
    workflowExecutionId: WorkflowExecutionId;
  }
  export interface GetWorkflowExecutionResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines the specified runtime instance of the workflow.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
    /**
     * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
     */
    workflowExecutionId?: WorkflowExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow created.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The type of workflow that Image Builder ran for the specified runtime instance of the workflow.
     */
    type?: WorkflowType;
    /**
     * The current runtime status for the specified runtime instance of the workflow.
     */
    status?: WorkflowExecutionStatus;
    /**
     * The output message from the specified runtime instance of the workflow, if applicable.
     */
    message?: WorkflowExecutionMessage;
    /**
     * The total number of steps in the specified runtime instance of the workflow that ran. This number should equal the sum of the step counts for steps that succeeded, were skipped, and failed.
     */
    totalStepCount?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps that ran successfully in the specified runtime instance of the workflow.
     */
    totalStepsSucceeded?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps that failed in the specified runtime instance of the workflow.
     */
    totalStepsFailed?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps that were skipped in the specified runtime instance of the workflow.
     */
    totalStepsSkipped?: WorkflowStepCount;
    /**
     * The timestamp when the specified runtime instance of the workflow started.
     */
    startTime?: DateTime;
    /**
     * The timestamp when the specified runtime instance of the workflow finished.
     */
    endTime?: DateTime;
    /**
     * Test workflows are defined within named runtime groups. The parallel group is a named group that contains one or more test workflows.
     */
    parallelGroup?: ParallelGroup;
  }
  export interface GetWorkflowRequest {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource that you want to get.
     */
    workflowBuildVersionArn: WorkflowVersionArnOrBuildVersionArn;
  }
  export interface GetWorkflowResponse {
    /**
     * The workflow resource specified in the request.
     */
    workflow?: Workflow;
  }
  export interface GetWorkflowStepExecutionRequest {
    /**
     * Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step.
     */
    stepExecutionId: WorkflowStepExecutionId;
  }
  export interface GetWorkflowStepExecutionResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The unique identifier for the runtime version of the workflow step that you specified in the request.
     */
    stepExecutionId?: WorkflowStepExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines this workflow step.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
    /**
     * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
     */
    workflowExecutionId?: WorkflowExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow step creates.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The name of the specified runtime instance of the workflow step.
     */
    name?: WorkflowStepName;
    /**
     * Describes the specified workflow step.
     */
    description?: WorkflowStepDescription;
    /**
     * The name of the action that the specified step performs.
     */
    action?: WorkflowStepAction;
    /**
     * The current status for the specified runtime version of the workflow step.
     */
    status?: WorkflowStepExecutionStatus;
    /**
     * Reports on the rollback status of the specified runtime version of the workflow step, if applicable.
     */
    rollbackStatus?: WorkflowStepExecutionRollbackStatus;
    /**
     * The output message from the specified runtime instance of the workflow step, if applicable.
     */
    message?: WorkflowStepMessage;
    /**
     * Input parameters that Image Builder provided for the specified runtime instance of the workflow step.
     */
    inputs?: WorkflowStepInputs;
    /**
     * The file names that the specified runtime version of the workflow step created as output.
     */
    outputs?: WorkflowStepOutputs;
    /**
     * The timestamp when the specified runtime version of the workflow step started.
     */
    startTime?: DateTime;
    /**
     * The timestamp when the specified runtime instance of the workflow step finished.
     */
    endTime?: DateTime;
    /**
     * The action to perform if the workflow step fails.
     */
    onFailure?: NonEmptyString;
    /**
     * The maximum duration in seconds for this step to complete its action.
     */
    timeoutSeconds?: WorkflowStepTimeoutSecondsInteger;
  }
  export type HttpPutResponseHopLimit = number;
  export type HttpTokens = string;
  export interface Image {
    /**
     * The Amazon Resource Name (ARN) of the image.  Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:   Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.   Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;   Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.   
     */
    arn?: ImageBuilderArn;
    /**
     * Specifies whether this image produces an AMI or a container image.
     */
    type?: ImageType;
    /**
     * The name of the image.
     */
    name?: ResourceName;
    /**
     * The semantic version of the image.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    version?: VersionNumber;
    /**
     * The image operating system platform, such as Linux or Windows.
     */
    platform?: Platform;
    /**
     * Indicates whether Image Builder collects additional information about the image, such as the operating system (OS) version and package list.
     */
    enhancedImageMetadataEnabled?: NullableBoolean;
    /**
     * The operating system version for instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.
     */
    osVersion?: OsVersion;
    /**
     * The state of the image.
     */
    state?: ImageState;
    /**
     * For images that distribute an AMI, this is the image recipe that Image Builder used to create the image. For container images, this is empty.
     */
    imageRecipe?: ImageRecipe;
    /**
     * For container images, this is the container recipe that Image Builder used to create the image. For images that distribute an AMI, this is empty.
     */
    containerRecipe?: ContainerRecipe;
    /**
     * The name of the image pipeline that created this image.
     */
    sourcePipelineName?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that created this image.
     */
    sourcePipelineArn?: Arn;
    /**
     * The infrastructure that Image Builder used to create this image.
     */
    infrastructureConfiguration?: InfrastructureConfiguration;
    /**
     * The distribution configuration that Image Builder used to create this image.
     */
    distributionConfiguration?: DistributionConfiguration;
    /**
     * The image tests that ran when that Image Builder created this image.
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * The date on which Image Builder created this image.
     */
    dateCreated?: DateTime;
    /**
     * The output resources that Image Builder produces for this image.
     */
    outputResources?: OutputResources;
    /**
     * The tags that apply to this image.
     */
    tags?: TagMap;
    /**
     * Indicates the type of build that created this image. The build can be initiated in the following ways:    USER_INITIATED – A manual pipeline build request.    SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.    IMPORT – A VM import created the image to use as the base image for the recipe.  
     */
    buildType?: BuildType;
    /**
     * The origin of the base image that Image Builder used to build this image.
     */
    imageSource?: ImageSource;
    /**
     * Contains information about the current state of scans for this image.
     */
    scanState?: ImageScanState;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    /**
     * The time when deprecation occurs for an image resource. This can be a past or future date.
     */
    deprecationTime?: DateTimeTimestamp;
    /**
     * Identifies the last runtime instance of the lifecycle policy to take action on the image.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: RoleNameOrArn;
    /**
     * Contains the build and test workflows that are associated with the image.
     */
    workflows?: WorkflowConfigurationList;
  }
  export interface ImageAggregation {
    /**
     * The Amazon Resource Name (ARN) that identifies the image for this aggregation.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image.
     */
    severityCounts?: SeverityCounts;
  }
  export type ImageBuildMessage = string;
  export type ImageBuildVersionArn = string;
  export type ImageBuilderArn = string;
  export interface ImagePackage {
    /**
     * The name of the package as reported to the operating system package manager.
     */
    packageName?: NonEmptyString;
    /**
     * The version of the package as reported to the operating system package manager.
     */
    packageVersion?: NonEmptyString;
  }
  export type ImagePackageList = ImagePackage[];
  export interface ImagePipeline {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the image pipeline.
     */
    name?: ResourceName;
    /**
     * The description of the image pipeline.
     */
    description?: NonEmptyString;
    /**
     * The platform of the image pipeline.
     */
    platform?: Platform;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: NullableBoolean;
    /**
     * The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
     */
    imageRecipeArn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
     */
    containerRecipeArn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
     */
    infrastructureConfigurationArn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
     */
    distributionConfigurationArn?: Arn;
    /**
     * The image tests configuration of the image pipeline.
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * The schedule of the image pipeline.
     */
    schedule?: Schedule;
    /**
     * The status of the image pipeline.
     */
    status?: PipelineStatus;
    /**
     * The date on which this image pipeline was created.
     */
    dateCreated?: DateTime;
    /**
     * The date on which this image pipeline was last updated.
     */
    dateUpdated?: DateTime;
    /**
     * This is no longer supported, and does not return a value.
     */
    dateLastRun?: DateTime;
    /**
     * The next date when the pipeline is scheduled to run.
     */
    dateNextRun?: DateTime;
    /**
     * The tags of this image pipeline.
     */
    tags?: TagMap;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: RoleNameOrArn;
    /**
     * Contains the workflows that run for the image pipeline.
     */
    workflows?: WorkflowConfigurationList;
  }
  export interface ImagePipelineAggregation {
    /**
     * The Amazon Resource Name (ARN) that identifies the image pipeline for this aggregation.
     */
    imagePipelineArn?: ImagePipelineArn;
    /**
     * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image pipeline.
     */
    severityCounts?: SeverityCounts;
  }
  export type ImagePipelineArn = string;
  export type ImagePipelineList = ImagePipeline[];
  export interface ImageRecipe {
    /**
     * The Amazon Resource Name (ARN) of the image recipe.
     */
    arn?: ImageBuilderArn;
    /**
     * Specifies which type of image is created by the recipe - an AMI or a container image.
     */
    type?: ImageType;
    /**
     * The name of the image recipe.
     */
    name?: ResourceName;
    /**
     * The description of the image recipe.
     */
    description?: NonEmptyString;
    /**
     * The platform of the image recipe.
     */
    platform?: Platform;
    /**
     * The owner of the image recipe.
     */
    owner?: NonEmptyString;
    /**
     * The version of the image recipe.
     */
    version?: VersionNumber;
    /**
     * The components that are included in the image recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
     */
    components?: ComponentConfigurationList;
    /**
     * The base image of the image recipe.
     */
    parentImage?: NonEmptyString;
    /**
     * The block device mappings to apply when creating images from this recipe.
     */
    blockDeviceMappings?: InstanceBlockDeviceMappings;
    /**
     * The date on which this image recipe was created.
     */
    dateCreated?: DateTime;
    /**
     * The tags of the image recipe.
     */
    tags?: TagMap;
    /**
     * The working directory to be used during build and test workflows.
     */
    workingDirectory?: NonEmptyString;
    /**
     * Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration. Instance configuration adds a layer of control over those instances. You can define settings and add scripts to run when an instance is launched from your AMI.
     */
    additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  }
  export type ImageRecipeArn = string;
  export interface ImageRecipeSummary {
    /**
     * The Amazon Resource Name (ARN) of the image recipe.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the image recipe.
     */
    name?: ResourceName;
    /**
     * The platform of the image recipe.
     */
    platform?: Platform;
    /**
     * The owner of the image recipe.
     */
    owner?: NonEmptyString;
    /**
     * The base image of the image recipe.
     */
    parentImage?: NonEmptyString;
    /**
     * The date on which this image recipe was created.
     */
    dateCreated?: DateTime;
    /**
     * The tags of the image recipe.
     */
    tags?: TagMap;
  }
  export type ImageRecipeSummaryList = ImageRecipeSummary[];
  export interface ImageScanFinding {
    /**
     * The Amazon Web Services account ID that's associated with the finding.
     */
    awsAccountId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image build version that's associated with the finding.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that's associated with the finding.
     */
    imagePipelineArn?: ImagePipelineArn;
    /**
     * The type of the finding. Image Builder looks for findings of the type PACKAGE_VULNERABILITY that apply to output images, and excludes other types.
     */
    type?: NonEmptyString;
    /**
     * The description of the finding.
     */
    description?: NonEmptyString;
    /**
     * The title of the finding.
     */
    title?: NonEmptyString;
    /**
     * An object that contains the details about how to remediate the finding.
     */
    remediation?: Remediation;
    /**
     * The severity of the finding.
     */
    severity?: NonEmptyString;
    /**
     * The date and time when the finding was first observed.
     */
    firstObservedAt?: DateTimeTimestamp;
    /**
     * The timestamp when the finding was last updated.
     */
    updatedAt?: DateTimeTimestamp;
    /**
     * The score that Amazon Inspector assigned for the finding.
     */
    inspectorScore?: NonNegativeDouble;
    /**
     * An object that contains details of the Amazon Inspector score.
     */
    inspectorScoreDetails?: InspectorScoreDetails;
    /**
     * An object that contains the details of a package vulnerability finding.
     */
    packageVulnerabilityDetails?: PackageVulnerabilityDetails;
    /**
     * Details about whether a fix is available for any of the packages that are identified in the finding through a version update.
     */
    fixAvailable?: NonEmptyString;
  }
  export interface ImageScanFindingAggregation {
    /**
     * Returns an object that contains severity counts based on an account ID.
     */
    accountAggregation?: AccountAggregation;
    /**
     * Returns an object that contains severity counts based on the Amazon Resource Name (ARN) for a specific image.
     */
    imageAggregation?: ImageAggregation;
    /**
     * Returns an object that contains severity counts based on an image pipeline ARN.
     */
    imagePipelineAggregation?: ImagePipelineAggregation;
    /**
     * Returns an object that contains severity counts based on vulnerability ID.
     */
    vulnerabilityIdAggregation?: VulnerabilityIdAggregation;
  }
  export type ImageScanFindingAggregationsList = ImageScanFindingAggregation[];
  export interface ImageScanFindingsFilter {
    /**
     * The name of the image scan finding filter. Filter names are case-sensitive.
     */
    name?: FilterName;
    /**
     * The filter values. Filter values are case-sensitive.
     */
    values?: ImageScanFindingsFilterValues;
  }
  export type ImageScanFindingsFilterList = ImageScanFindingsFilter[];
  export type ImageScanFindingsFilterValues = FilterValue[];
  export type ImageScanFindingsList = ImageScanFinding[];
  export interface ImageScanState {
    /**
     * The current state of vulnerability scans for the image.
     */
    status?: ImageScanStatus;
    /**
     * The reason for the scan status for the image.
     */
    reason?: NonEmptyString;
  }
  export type ImageScanStatus = "PENDING"|"SCANNING"|"COLLECTING"|"COMPLETED"|"ABANDONED"|"FAILED"|"TIMED_OUT"|string;
  export interface ImageScanningConfiguration {
    /**
     * A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
     */
    imageScanningEnabled?: NullableBoolean;
    /**
     * Contains Amazon ECR settings for vulnerability scans.
     */
    ecrConfiguration?: EcrConfiguration;
  }
  export type ImageSource = "AMAZON_MANAGED"|"AWS_MARKETPLACE"|"IMPORTED"|"CUSTOM"|string;
  export interface ImageState {
    /**
     * The status of the image.
     */
    status?: ImageStatus;
    /**
     * The reason for the status of the image.
     */
    reason?: NonEmptyString;
  }
  export type ImageStatus = "PENDING"|"CREATING"|"BUILDING"|"TESTING"|"DISTRIBUTING"|"INTEGRATING"|"AVAILABLE"|"CANCELLED"|"FAILED"|"DEPRECATED"|"DELETED"|"DISABLED"|string;
  export interface ImageSummary {
    /**
     * The Amazon Resource Name (ARN) of the image.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the image.
     */
    name?: ResourceName;
    /**
     * Specifies whether this image produces an AMI or a container image.
     */
    type?: ImageType;
    /**
     * The version of the image.
     */
    version?: VersionNumber;
    /**
     * The image operating system platform, such as Linux or Windows.
     */
    platform?: Platform;
    /**
     * The operating system version of the instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.
     */
    osVersion?: OsVersion;
    /**
     * The state of the image.
     */
    state?: ImageState;
    /**
     * The owner of the image.
     */
    owner?: NonEmptyString;
    /**
     * The date on which Image Builder created this image.
     */
    dateCreated?: DateTime;
    /**
     * The output resources that Image Builder produced when it created this image.
     */
    outputResources?: OutputResources;
    /**
     * The tags that apply to this image.
     */
    tags?: TagMap;
    /**
     * Indicates the type of build that created this image. The build can be initiated in the following ways:    USER_INITIATED – A manual pipeline build request.    SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.    IMPORT – A VM import created the image to use as the base image for the recipe.  
     */
    buildType?: BuildType;
    /**
     * The origin of the base image that Image Builder used to build this image.
     */
    imageSource?: ImageSource;
    /**
     * The time when deprecation occurs for an image resource. This can be a past or future date.
     */
    deprecationTime?: DateTimeTimestamp;
    /**
     * Identifies the last runtime instance of the lifecycle policy to take action on the image.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
  }
  export type ImageSummaryList = ImageSummary[];
  export interface ImageTestsConfiguration {
    /**
     * Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.
     */
    imageTestsEnabled?: NullableBoolean;
    /**
     * The maximum time in minutes that tests are permitted to run.  The timeoutMinutes attribute is not currently active. This value is ignored. 
     */
    timeoutMinutes?: ImageTestsTimeoutMinutes;
  }
  export type ImageTestsTimeoutMinutes = number;
  export type ImageType = "AMI"|"DOCKER"|string;
  export interface ImageVersion {
    /**
     * The Amazon Resource Name (ARN) of a specific version of an Image Builder image.  Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:   Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.   Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;   Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.   
     */
    arn?: ImageBuilderArn;
    /**
     * The name of this specific version of an Image Builder image.
     */
    name?: ResourceName;
    /**
     * Specifies whether this image produces an AMI or a container image.
     */
    type?: ImageType;
    /**
     * Details for a specific version of an Image Builder image. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    version?: VersionNumber;
    /**
     * The operating system platform of the image version, for example "Windows" or "Linux".
     */
    platform?: Platform;
    /**
     * The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.
     */
    osVersion?: OsVersion;
    /**
     * The owner of the image version.
     */
    owner?: NonEmptyString;
    /**
     * The date on which this specific version of the Image Builder image was created.
     */
    dateCreated?: DateTime;
    /**
     * Indicates the type of build that created this image. The build can be initiated in the following ways:    USER_INITIATED – A manual pipeline build request.    SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.    IMPORT – A VM import created the image to use as the base image for the recipe.  
     */
    buildType?: BuildType;
    /**
     * The origin of the base image that Image Builder used to build this image.
     */
    imageSource?: ImageSource;
  }
  export type ImageVersionArn = string;
  export type ImageVersionArnOrBuildVersionArn = string;
  export type ImageVersionList = ImageVersion[];
  export interface ImportComponentRequest {
    /**
     * The name of the component.
     */
    name: ResourceName;
    /**
     * The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    semanticVersion: VersionNumber;
    /**
     * The description of the component. Describes the contents of the component.
     */
    description?: NonEmptyString;
    /**
     * The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of the component.
     */
    changeDescription?: NonEmptyString;
    /**
     * The type of the component denotes whether the component is used to build the image, or only to test it.
     */
    type: ComponentType;
    /**
     * The format of the resource that you want to import as a component.
     */
    format: ComponentFormat;
    /**
     * The platform of the component.
     */
    platform: Platform;
    /**
     * The data of the component. Used to specify the data inline. Either data or uri can be used to specify the data within the component.
     */
    data?: NonEmptyString;
    /**
     * The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either data or uri can be used to specify the data within the component.
     */
    uri?: Uri;
    /**
     * The ID of the KMS key that should be used to encrypt this component.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * The tags of the component.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface ImportComponentResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the imported component.
     */
    componentBuildVersionArn?: ComponentBuildVersionArn;
  }
  export interface ImportVmImageRequest {
    /**
     * The name of the base image that is created by the import process.
     */
    name: NonEmptyString;
    /**
     * The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. 
     */
    semanticVersion: VersionNumber;
    /**
     * The description for the base image that is created by the import process.
     */
    description?: NonEmptyString;
    /**
     * The operating system platform for the imported VM.
     */
    platform: Platform;
    /**
     * The operating system version for the imported VM.
     */
    osVersion?: OsVersion;
    /**
     * The importTaskId (API) or ImportTaskId (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.
     */
    vmImportTaskId: NonEmptyString;
    /**
     * Tags that are attached to the import resources.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface ImportVmImageResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the AMI that was created during the VM import process. This AMI is used as the base image for the recipe that imported the VM.
     */
    imageArn?: Arn;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
  }
  export interface InfrastructureConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the infrastructure configuration.
     */
    name?: ResourceName;
    /**
     * The description of the infrastructure configuration.
     */
    description?: NonEmptyString;
    /**
     * The instance types of the infrastructure configuration.
     */
    instanceTypes?: InstanceTypeList;
    /**
     * The instance profile of the infrastructure configuration.
     */
    instanceProfileName?: InstanceProfileNameType;
    /**
     * The security group IDs of the infrastructure configuration.
     */
    securityGroupIds?: SecurityGroupIds;
    /**
     * The subnet ID of the infrastructure configuration.
     */
    subnetId?: NonEmptyString;
    /**
     * The logging configuration of the infrastructure configuration.
     */
    logging?: Logging;
    /**
     * The Amazon EC2 key pair of the infrastructure configuration.
     */
    keyPair?: NonEmptyString;
    /**
     * The terminate instance on failure configuration of the infrastructure configuration.
     */
    terminateInstanceOnFailure?: NullableBoolean;
    /**
     * The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.  EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under. 
     */
    snsTopicArn?: NonEmptyString;
    /**
     * The date on which the infrastructure configuration was created.
     */
    dateCreated?: DateTime;
    /**
     * The date on which the infrastructure configuration was last updated.
     */
    dateUpdated?: DateTime;
    /**
     * The tags attached to the resource created by Image Builder.
     */
    resourceTags?: ResourceTagMap;
    /**
     * The instance metadata option settings for the infrastructure configuration.
     */
    instanceMetadataOptions?: InstanceMetadataOptions;
    /**
     * The tags of the infrastructure configuration.
     */
    tags?: TagMap;
  }
  export type InfrastructureConfigurationArn = string;
  export interface InfrastructureConfigurationSummary {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration.
     */
    arn?: ImageBuilderArn;
    /**
     * The name of the infrastructure configuration.
     */
    name?: ResourceName;
    /**
     * The description of the infrastructure configuration.
     */
    description?: NonEmptyString;
    /**
     * The date on which the infrastructure configuration was created.
     */
    dateCreated?: DateTime;
    /**
     * The date on which the infrastructure configuration was last updated.
     */
    dateUpdated?: DateTime;
    /**
     * The tags attached to the image created by Image Builder.
     */
    resourceTags?: ResourceTagMap;
    /**
     * The tags of the infrastructure configuration.
     */
    tags?: TagMap;
    /**
     * The instance types of the infrastructure configuration.
     */
    instanceTypes?: InstanceTypeList;
    /**
     * The instance profile of the infrastructure configuration.
     */
    instanceProfileName?: InstanceProfileNameType;
  }
  export type InfrastructureConfigurationSummaryList = InfrastructureConfigurationSummary[];
  export type InlineComponentData = string;
  export type InlineDockerFileTemplate = string;
  export type InlineWorkflowData = string;
  export interface InspectorScoreDetails {
    /**
     * An object that contains details about an adjustment that Amazon Inspector made to the CVSS score for the finding.
     */
    adjustedCvss?: CvssScoreDetails;
  }
  export interface InstanceBlockDeviceMapping {
    /**
     * The device to which these mappings apply.
     */
    deviceName?: NonEmptyString;
    /**
     * Use to manage Amazon EBS-specific configuration for this mapping.
     */
    ebs?: EbsInstanceBlockDeviceSpecification;
    /**
     * Use to manage instance ephemeral devices.
     */
    virtualName?: NonEmptyString;
    /**
     * Use to remove a mapping from the base image.
     */
    noDevice?: EmptyString;
  }
  export type InstanceBlockDeviceMappings = InstanceBlockDeviceMapping[];
  export interface InstanceConfiguration {
    /**
     * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
     */
    image?: NonEmptyString;
    /**
     * Defines the block devices to attach for building an instance from this Image Builder AMI.
     */
    blockDeviceMappings?: InstanceBlockDeviceMappings;
  }
  export interface InstanceMetadataOptions {
    /**
     * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:    required – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.    optional – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.   The default setting is optional.
     */
    httpTokens?: HttpTokens;
    /**
     * Limit the number of hops that an instance metadata request can traverse to reach its destination. The default is one hop. However, if HTTP tokens are required, container image builds need a minimum of two hops.
     */
    httpPutResponseHopLimit?: HttpPutResponseHopLimit;
  }
  export type InstanceProfileNameType = string;
  export type InstanceType = string;
  export type InstanceTypeList = InstanceType[];
  export interface LaunchPermissionConfiguration {
    /**
     * The Amazon Web Services account ID.
     */
    userIds?: AccountList;
    /**
     * The name of the group.
     */
    userGroups?: StringList;
    /**
     * The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more information, see What is Organizations?.
     */
    organizationArns?: OrganizationArnList;
    /**
     * The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. For more information about key concepts for Organizations, see Organizations terminology and concepts.
     */
    organizationalUnitArns?: OrganizationalUnitArnList;
  }
  export interface LaunchTemplateConfiguration {
    /**
     * Identifies the Amazon EC2 launch template to use.
     */
    launchTemplateId: LaunchTemplateId;
    /**
     * The account ID that this configuration applies to.
     */
    accountId?: AccountId;
    /**
     * Set the specified Amazon EC2 launch template as the default launch template for the specified account.
     */
    setDefaultVersion?: Boolean;
  }
  export type LaunchTemplateConfigurationList = LaunchTemplateConfiguration[];
  export type LaunchTemplateId = string;
  export type LicenseConfigurationArn = string;
  export type LicenseConfigurationArnList = LicenseConfigurationArn[];
  export interface LifecycleExecution {
    /**
     * Identifies the lifecycle policy runtime instance.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy that ran.
     */
    lifecyclePolicyArn?: LifecyclePolicyArn;
    /**
     * Contains information about associated resources that are identified for action by the runtime instance of the lifecycle policy.
     */
    resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary;
    /**
     * Runtime state that reports if the policy action ran successfully, failed, or was skipped.
     */
    state?: LifecycleExecutionState;
    /**
     * The timestamp when the lifecycle runtime instance started.
     */
    startTime?: DateTimeTimestamp;
    /**
     * The timestamp when the lifecycle runtime instance completed.
     */
    endTime?: DateTimeTimestamp;
  }
  export type LifecycleExecutionId = string;
  export interface LifecycleExecutionResource {
    /**
     * The account that owns the impacted resource.
     */
    accountId?: NonEmptyString;
    /**
     * Identifies the impacted resource. The resource ID depends on the type of resource, as follows.   Image Builder image resources: Amazon Resource Name (ARN)   Distributed AMIs: AMI ID   Container images distributed to an ECR repository: image URI or SHA Digest  
     */
    resourceId?: NonEmptyString;
    /**
     * The runtime state for the lifecycle execution.
     */
    state?: LifecycleExecutionResourceState;
    /**
     * The action to take for the identified resource.
     */
    action?: LifecycleExecutionResourceAction;
    /**
     * The Amazon Web Services Region where the lifecycle execution resource is stored.
     */
    region?: NonEmptyString;
    /**
     * A list of associated resource snapshots for the impacted resource if it’s an AMI.
     */
    snapshots?: LifecycleExecutionSnapshotResourceList;
    /**
     * For an impacted container image, this identifies a list of URIs for associated container images distributed to ECR repositories.
     */
    imageUris?: StringList;
  }
  export interface LifecycleExecutionResourceAction {
    /**
     * The name of the resource that was identified for a lifecycle policy action.
     */
    name?: LifecycleExecutionResourceActionName;
    /**
     * The reason why the lifecycle policy action is taken.
     */
    reason?: NonEmptyString;
  }
  export type LifecycleExecutionResourceActionName = "AVAILABLE"|"DELETE"|"DEPRECATE"|"DISABLE"|string;
  export type LifecycleExecutionResourceList = LifecycleExecutionResource[];
  export interface LifecycleExecutionResourceState {
    /**
     * The runtime status of the lifecycle action taken for the impacted resource.
     */
    status?: LifecycleExecutionResourceStatus;
    /**
     * Messaging that clarifies the reason for the assigned status.
     */
    reason?: NonEmptyString;
  }
  export type LifecycleExecutionResourceStatus = "FAILED"|"IN_PROGRESS"|"SKIPPED"|"SUCCESS"|string;
  export interface LifecycleExecutionResourcesImpactedSummary {
    /**
     * Indicates whether an image resource that was identified for a lifecycle action has associated resources that are also impacted.
     */
    hasImpactedResources?: Boolean;
  }
  export interface LifecycleExecutionSnapshotResource {
    /**
     * Identifies the impacted snapshot resource.
     */
    snapshotId?: NonEmptyString;
    /**
     * The runtime status of the lifecycle action taken for the snapshot.
     */
    state?: LifecycleExecutionResourceState;
  }
  export type LifecycleExecutionSnapshotResourceList = LifecycleExecutionSnapshotResource[];
  export interface LifecycleExecutionState {
    /**
     * The runtime status of the lifecycle execution.
     */
    status?: LifecycleExecutionStatus;
    /**
     * The reason for the current status.
     */
    reason?: NonEmptyString;
  }
  export type LifecycleExecutionStatus = "IN_PROGRESS"|"CANCELLED"|"CANCELLING"|"FAILED"|"SUCCESS"|string;
  export type LifecycleExecutionsList = LifecycleExecution[];
  export interface LifecyclePolicy {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy resource.
     */
    arn?: LifecyclePolicyArn;
    /**
     * The name of the lifecycle policy.
     */
    name?: ResourceName;
    /**
     * Optional description for the lifecycle policy.
     */
    description?: NonEmptyString;
    /**
     * Indicates whether the lifecycle policy resource is enabled.
     */
    status?: LifecyclePolicyStatus;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy. This is a custom role that you create.
     */
    executionRole?: RoleNameOrArn;
    /**
     * The type of resources the lifecycle policy targets.
     */
    resourceType?: LifecyclePolicyResourceType;
    /**
     * The configuration details for a lifecycle policy resource.
     */
    policyDetails?: LifecyclePolicyDetails;
    /**
     * Resource selection criteria used to run the lifecycle policy.
     */
    resourceSelection?: LifecyclePolicyResourceSelection;
    /**
     * The timestamp when Image Builder created the lifecycle policy resource.
     */
    dateCreated?: DateTimeTimestamp;
    /**
     * The timestamp when Image Builder updated the lifecycle policy resource.
     */
    dateUpdated?: DateTimeTimestamp;
    /**
     * The timestamp for the last time Image Builder ran the lifecycle policy.
     */
    dateLastRun?: DateTimeTimestamp;
    /**
     * To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.
     */
    tags?: TagMap;
  }
  export type LifecyclePolicyArn = string;
  export interface LifecyclePolicyDetail {
    /**
     * Configuration details for the policy action.
     */
    action: LifecyclePolicyDetailAction;
    /**
     * Specifies the resources that the lifecycle policy applies to.
     */
    filter: LifecyclePolicyDetailFilter;
    /**
     * Additional rules to specify resources that should be exempt from policy actions.
     */
    exclusionRules?: LifecyclePolicyDetailExclusionRules;
  }
  export interface LifecyclePolicyDetailAction {
    /**
     * Specifies the lifecycle action to take.
     */
    type: LifecyclePolicyDetailActionType;
    /**
     * Specifies the resources that the lifecycle policy applies to.
     */
    includeResources?: LifecyclePolicyDetailActionIncludeResources;
  }
  export interface LifecyclePolicyDetailActionIncludeResources {
    /**
     * Specifies whether the lifecycle action should apply to distributed AMIs.
     */
    amis?: Boolean;
    /**
     * Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
     */
    snapshots?: Boolean;
    /**
     * Specifies whether the lifecycle action should apply to distributed containers.
     */
    containers?: Boolean;
  }
  export type LifecyclePolicyDetailActionType = "DELETE"|"DEPRECATE"|"DISABLE"|string;
  export interface LifecyclePolicyDetailExclusionRules {
    /**
     * Contains a list of tags that Image Builder uses to skip lifecycle actions for resources that have them.
     */
    tagMap?: TagMap;
    /**
     * Lists configuration values that apply to AMIs that Image Builder should exclude from the lifecycle action.
     */
    amis?: LifecyclePolicyDetailExclusionRulesAmis;
  }
  export interface LifecyclePolicyDetailExclusionRulesAmis {
    /**
     * Configures whether public AMIs are excluded from the lifecycle action.
     */
    isPublic?: Boolean;
    /**
     * Configures Amazon Web Services Regions that are excluded from the lifecycle action.
     */
    regions?: StringList;
    /**
     * Specifies Amazon Web Services accounts whose resources are excluded from the lifecycle action.
     */
    sharedAccounts?: AccountList;
    /**
     * Specifies configuration details for Image Builder to exclude the most recent resources from lifecycle actions.
     */
    lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched;
    /**
     * Lists tags that should be excluded from lifecycle actions for the AMIs that have them.
     */
    tagMap?: TagMap;
  }
  export interface LifecyclePolicyDetailExclusionRulesAmisLastLaunched {
    /**
     * The integer number of units for the time period. For example 6 (months).
     */
    value: LifecyclePolicyDetailExclusionRulesAmisLastLaunchedValue;
    /**
     * Defines the unit of time that the lifecycle policy uses to calculate elapsed time since the last instance launched from the AMI. For example: days, weeks, months, or years.
     */
    unit: LifecyclePolicyTimeUnit;
  }
  export type LifecyclePolicyDetailExclusionRulesAmisLastLaunchedValue = number;
  export interface LifecyclePolicyDetailFilter {
    /**
     * Filter resources based on either age or count.
     */
    type: LifecyclePolicyDetailFilterType;
    /**
     * The number of units for the time period or for the count. For example, a value of 6 might refer to six months or six AMIs.  For count-based filters, this value represents the minimum number of resources to keep on hand. If you have fewer resources than this number, the resource is excluded from lifecycle actions. 
     */
    value: LifecyclePolicyDetailFilterValue;
    /**
     * Defines the unit of time that the lifecycle policy uses to determine impacted resources. This is required for age-based rules.
     */
    unit?: LifecyclePolicyTimeUnit;
    /**
     * For age-based filters, this is the number of resources to keep on hand after the lifecycle DELETE action is applied. Impacted resources are only deleted if you have more than this number of resources. If you have fewer resources than this number, the impacted resource is not deleted.
     */
    retainAtLeast?: LifecyclePolicyDetailFilterRetainAtLeast;
  }
  export type LifecyclePolicyDetailFilterRetainAtLeast = number;
  export type LifecyclePolicyDetailFilterType = "AGE"|"COUNT"|string;
  export type LifecyclePolicyDetailFilterValue = number;
  export type LifecyclePolicyDetails = LifecyclePolicyDetail[];
  export interface LifecyclePolicyResourceSelection {
    /**
     * A list of recipes that are used as selection criteria for the output images that the lifecycle policy applies to.
     */
    recipes?: LifecyclePolicyResourceSelectionRecipes;
    /**
     * A list of tags that are used as selection criteria for the resources that the lifecycle policy applies to.
     */
    tagMap?: TagMap;
  }
  export interface LifecyclePolicyResourceSelectionRecipe {
    /**
     * The name of an Image Builder recipe that the lifecycle policy uses for resource selection.
     */
    name: ResourceName;
    /**
     * The version of the Image Builder recipe specified by the name field.
     */
    semanticVersion: VersionNumber;
  }
  export type LifecyclePolicyResourceSelectionRecipes = LifecyclePolicyResourceSelectionRecipe[];
  export type LifecyclePolicyResourceType = "AMI_IMAGE"|"CONTAINER_IMAGE"|string;
  export type LifecyclePolicyStatus = "DISABLED"|"ENABLED"|string;
  export interface LifecyclePolicySummary {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy summary resource.
     */
    arn?: LifecyclePolicyArn;
    /**
     * The name of the lifecycle policy.
     */
    name?: ResourceName;
    /**
     * Optional description for the lifecycle policy.
     */
    description?: NonEmptyString;
    /**
     * The lifecycle policy resource status.
     */
    status?: LifecyclePolicyStatus;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy.
     */
    executionRole?: RoleNameOrArn;
    /**
     * The type of resources the lifecycle policy targets.
     */
    resourceType?: LifecyclePolicyResourceType;
    /**
     * The timestamp when Image Builder created the lifecycle policy resource.
     */
    dateCreated?: DateTimeTimestamp;
    /**
     * The timestamp when Image Builder updated the lifecycle policy resource.
     */
    dateUpdated?: DateTimeTimestamp;
    /**
     * The timestamp for the last time Image Builder ran the lifecycle policy.
     */
    dateLastRun?: DateTimeTimestamp;
    /**
     * To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.
     */
    tags?: TagMap;
  }
  export type LifecyclePolicySummaryList = LifecyclePolicySummary[];
  export type LifecyclePolicyTimeUnit = "DAYS"|"WEEKS"|"MONTHS"|"YEARS"|string;
  export interface ListComponentBuildVersionsRequest {
    /**
     * The component version Amazon Resource Name (ARN) whose versions you want to list.
     */
    componentVersionArn: ComponentVersionArn;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListComponentBuildVersionsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of component summaries for the specified semantic version.
     */
    componentSummaryList?: ComponentSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListComponentsRequest {
    /**
     * Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you.
     */
    owner?: Ownership;
    /**
     * Use the following filters to streamline results:    description     name     platform     supportedOsVersion     type     version   
     */
    filters?: FilterList;
    /**
     * Returns the list of components for the specified name.
     */
    byName?: Boolean;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListComponentsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of component semantic versions.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them. 
     */
    componentVersionList?: ComponentVersionList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListContainerRecipesRequest {
    /**
     * Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.
     */
    owner?: Ownership;
    /**
     * Use the following filters to streamline results:    containerType     name     parentImage     platform   
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListContainerRecipesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of container recipes returned for the request.
     */
    containerRecipeSummaryList?: ContainerRecipeSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListDistributionConfigurationsRequest {
    /**
     * You can filter on name to streamline results.
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDistributionConfigurationsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of distributions.
     */
    distributionConfigurationSummaryList?: DistributionConfigurationSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageBuildVersionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
     */
    imageVersionArn: ImageVersionArn;
    /**
     * Use the following filters to streamline results:    name     osVersion     platform     type     version   
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageBuildVersionsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of image build versions.
     */
    imageSummaryList?: ImageSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePackagesRequest {
    /**
     * Filter results for the ListImagePackages request by the Image Build Version ARN
     */
    imageBuildVersionArn: ImageBuildVersionArn;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePackagesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of Image Packages returned in the response.
     */
    imagePackageList?: ImagePackageList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePipelineImagesRequest {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
     */
    imagePipelineArn: ImagePipelineArn;
    /**
     * Use the following filters to streamline results:    name     version   
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePipelineImagesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of images built by this pipeline.
     */
    imageSummaryList?: ImageSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePipelinesRequest {
    /**
     * Use the following filters to streamline results:    description     distributionConfigurationArn     imageRecipeArn     infrastructureConfigurationArn     name     status   
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagePipelinesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of image pipelines.
     */
    imagePipelineList?: ImagePipelineList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageRecipesRequest {
    /**
     * The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers.
     */
    owner?: Ownership;
    /**
     * Use the following filters to streamline results:    name     parentImage     platform   
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageRecipesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of image pipelines.
     */
    imageRecipeSummaryList?: ImageRecipeSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageScanFindingAggregationsRequest {
    filter?: Filter;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageScanFindingAggregationsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The aggregation type specifies what type of key is used to group the image scan findings. Image Builder returns results based on the request filter. If you didn't specify a filter in the request, the type defaults to accountId.  Aggregation types    accountId   imageBuildVersionArn   imagePipelineArn   vulnerabilityId   Each aggregation includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for each key value.
     */
    aggregationType?: NonEmptyString;
    /**
     * An array of image scan finding aggregations that match the filter criteria.
     */
    responses?: ImageScanFindingAggregationsList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageScanFindingsRequest {
    /**
     * An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:    imageBuildVersionArn     imagePipelineArn     vulnerabilityId     severity    If you don't request a filter, then all findings in your account are listed.
     */
    filters?: ImageScanFindingsFilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImageScanFindingsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The image scan findings for your account that meet your request filter criteria.
     */
    findings?: ImageScanFindingsList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImagesRequest {
    /**
     * The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers.
     */
    owner?: Ownership;
    /**
     * Use the following filters to streamline results:    name     osVersion     platform     type     version   
     */
    filters?: FilterList;
    /**
     * Requests a list of images with a specific recipe name.
     */
    byName?: Boolean;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
    /**
     * Includes deprecated images in the response list.
     */
    includeDeprecated?: NullableBoolean;
  }
  export interface ListImagesResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of image semantic versions.  The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. 
     */
    imageVersionList?: ImageVersionList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListInfrastructureConfigurationsRequest {
    /**
     * You can filter on name to streamline results.
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListInfrastructureConfigurationsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The list of infrastructure configurations.
     */
    infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListLifecycleExecutionResourcesRequest {
    /**
     * Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details.
     */
    lifecycleExecutionId: LifecycleExecutionId;
    /**
     * You can leave this empty to get a list of Image Builder resources that were identified for lifecycle actions. To get a list of associated resources that are impacted for an individual resource (the parent), specify its Amazon Resource Name (ARN). Associated resources are produced from your image and distributed when you run a build, such as AMIs or container images stored in ECR repositories.
     */
    parentResourceId?: NonEmptyString;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListLifecycleExecutionResourcesResponse {
    /**
     * Runtime details for the specified runtime instance of the lifecycle policy.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
    /**
     * The current state of the lifecycle runtime instance.
     */
    lifecycleExecutionState?: LifecycleExecutionState;
    /**
     * A list of resources that were identified for lifecycle actions.
     */
    resources?: LifecycleExecutionResourceList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListLifecycleExecutionsRequest {
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
    /**
     * The Amazon Resource Name (ARN) of the resource for which to get a list of lifecycle runtime instances.
     */
    resourceArn: ImageBuilderArn;
  }
  export interface ListLifecycleExecutionsResponse {
    /**
     * A list of lifecycle runtime instances for the specified resource.
     */
    lifecycleExecutions?: LifecycleExecutionsList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListLifecyclePoliciesRequest {
    /**
     * Streamline results based on one of the following values: Name, Status.
     */
    filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListLifecyclePoliciesResponse {
    /**
     * A list of lifecycle policies in your Amazon Web Services account that meet the criteria specified in the request.
     */
    lifecyclePolicySummaryList?: LifecyclePolicySummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
     */
    resourceArn: ImageBuilderArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags for the specified resource.
     */
    tags?: TagMap;
  }
  export interface ListWaitingWorkflowStepsRequest {
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWaitingWorkflowStepsResponse {
    /**
     * An array of the workflow steps that are waiting for action in your Amazon Web Services account.
     */
    steps?: WorkflowStepExecutionList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowBuildVersionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions.
     */
    workflowVersionArn: WorkflowWildcardVersionArn;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowBuildVersionsResponse {
    /**
     * A list that contains metadata for the workflow builds that have run for the workflow resource specified in the request.
     */
    workflowSummaryList?: WorkflowSummaryList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowExecutionsRequest {
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
    /**
     * List all workflow runtime instances for the specified image build version resource ARN.
     */
    imageBuildVersionArn: ImageBuildVersionArn;
  }
  export interface ListWorkflowExecutionsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * Contains an array of runtime details that represents each time a workflow ran for the requested image build version.
     */
    workflowExecutions?: WorkflowExecutionsList;
    /**
     * The resource ARN of the image build version for which you requested a list of workflow runtime details.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The output message from the list action, if applicable.
     */
    message?: ImageBuildMessage;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowStepExecutionsRequest {
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
    /**
     * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
     */
    workflowExecutionId: WorkflowExecutionId;
  }
  export interface ListWorkflowStepExecutionsResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * Contains an array of runtime details that represents each step in this runtime instance of the workflow.
     */
    steps?: WorkflowStepExecutionsList;
    /**
     * The build version ARN for the Image Builder workflow resource that defines the steps for this runtime instance of the workflow.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
    /**
     * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
     */
    workflowExecutionId?: WorkflowExecutionId;
    /**
     * The image build version resource ARN that's associated with the specified runtime instance of the workflow.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The output message from the list action, if applicable.
     */
    message?: ImageBuildMessage;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowsRequest {
    /**
     * Used to get a list of workflow build version filtered by the identity of the creator.
     */
    owner?: Ownership;
    /**
     * Used to streamline search results.
     */
    filters?: FilterList;
    /**
     * Specify all or part of the workflow name to streamline results.
     */
    byName?: Boolean;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: RestrictedInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    nextToken?: PaginationToken;
  }
  export interface ListWorkflowsResponse {
    /**
     * A list of workflow build versions that match the request criteria.
     */
    workflowVersionList?: WorkflowVersionList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    nextToken?: PaginationToken;
  }
  export interface Logging {
    /**
     * The Amazon S3 logging configuration.
     */
    s3Logs?: S3Logs;
  }
  export type MaxParallelLaunches = number;
  export type NonEmptyString = string;
  export type NonEmptyStringList = NonEmptyString[];
  export type NonNegativeDouble = number;
  export type NullableBoolean = boolean;
  export type OnWorkflowFailure = "CONTINUE"|"ABORT"|string;
  export type OrganizationArn = string;
  export type OrganizationArnList = OrganizationArn[];
  export type OrganizationalUnitArn = string;
  export type OrganizationalUnitArnList = OrganizationalUnitArn[];
  export type OsVersion = string;
  export type OsVersionList = OsVersion[];
  export interface OutputResources {
    /**
     * The Amazon EC2 AMIs created by this image.
     */
    amis?: AmiList;
    /**
     * Container images that the pipeline has generated and stored in the output repository.
     */
    containers?: ContainerList;
  }
  export type Ownership = "Self"|"Shared"|"Amazon"|"ThirdParty"|string;
  export type PackageArchitecture = string;
  export type PackageEpoch = number;
  export interface PackageVulnerabilityDetails {
    /**
     * A unique identifier for this vulnerability.
     */
    vulnerabilityId: VulnerabilityId;
    /**
     * The packages that this vulnerability impacts.
     */
    vulnerablePackages?: VulnerablePackageList;
    /**
     * The source of the vulnerability information.
     */
    source?: NonEmptyString;
    /**
     * CVSS scores for one or more vulnerabilities that Amazon Inspector identified for a package.
     */
    cvss?: CvssScoreList;
    /**
     * Vulnerabilities that are often related to the findings for the package.
     */
    relatedVulnerabilities?: VulnerabilityIdList;
    /**
     * A link to the source of the vulnerability information.
     */
    sourceUrl?: NonEmptyString;
    /**
     * The severity that the vendor assigned to this vulnerability type.
     */
    vendorSeverity?: NonEmptyString;
    /**
     * The date and time when this vulnerability was first added to the vendor's database.
     */
    vendorCreatedAt?: DateTimeTimestamp;
    /**
     * The date and time when the vendor last updated this vulnerability in their database.
     */
    vendorUpdatedAt?: DateTimeTimestamp;
    /**
     * Links to web pages that contain details about the vulnerabilities that Amazon Inspector identified for the package.
     */
    referenceUrls?: NonEmptyStringList;
  }
  export type PaginationToken = string;
  export type ParallelGroup = string;
  export type PipelineExecutionStartCondition = "EXPRESSION_MATCH_ONLY"|"EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"|string;
  export type PipelineStatus = "DISABLED"|"ENABLED"|string;
  export type Platform = "Windows"|"Linux"|string;
  export interface PutComponentPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
     */
    componentArn: ComponentBuildVersionArn;
    /**
     * The policy to apply.
     */
    policy: ResourcePolicyDocument;
  }
  export interface PutComponentPolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the component that this policy was applied to.
     */
    componentArn?: ComponentBuildVersionArn;
  }
  export interface PutContainerRecipePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.
     */
    containerRecipeArn: ContainerRecipeArn;
    /**
     * The policy to apply to the container recipe.
     */
    policy: ResourcePolicyDocument;
  }
  export interface PutContainerRecipePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that this policy was applied to.
     */
    containerRecipeArn?: ContainerRecipeArn;
  }
  export interface PutImagePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
     */
    imageArn: ImageBuildVersionArn;
    /**
     * The policy to apply.
     */
    policy: ResourcePolicyDocument;
  }
  export interface PutImagePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image that this policy was applied to.
     */
    imageArn?: ImageBuildVersionArn;
  }
  export interface PutImageRecipePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
     */
    imageRecipeArn: ImageRecipeArn;
    /**
     * The policy to apply.
     */
    policy: ResourcePolicyDocument;
  }
  export interface PutImageRecipePolicyResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that this policy was applied to.
     */
    imageRecipeArn?: ImageRecipeArn;
  }
  export type RegionList = NonEmptyString[];
  export interface Remediation {
    /**
     * An object that contains information about the recommended course of action to remediate the finding.
     */
    recommendation?: RemediationRecommendation;
  }
  export interface RemediationRecommendation {
    /**
     * The recommended course of action to remediate the finding.
     */
    text?: NonEmptyString;
    /**
     * A link to more information about the recommended remediation for this vulnerability.
     */
    url?: NonEmptyString;
  }
  export type ResourceName = string;
  export type ResourcePolicyDocument = string;
  export interface ResourceState {
    /**
     * Shows the current lifecycle policy action that was applied to an impacted resource.
     */
    status?: ResourceStatus;
  }
  export interface ResourceStateUpdateExclusionRules {
    amis?: LifecyclePolicyDetailExclusionRulesAmis;
  }
  export interface ResourceStateUpdateIncludeResources {
    /**
     * Specifies whether the lifecycle action should apply to distributed AMIs
     */
    amis?: Boolean;
    /**
     * Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
     */
    snapshots?: Boolean;
    /**
     * Specifies whether the lifecycle action should apply to distributed containers.
     */
    containers?: Boolean;
  }
  export type ResourceStatus = "AVAILABLE"|"DELETED"|"DEPRECATED"|"DISABLED"|string;
  export type ResourceTagMap = {[key: string]: TagValue};
  export type RestrictedInteger = number;
  export type RoleNameOrArn = string;
  export interface S3ExportConfiguration {
    /**
     * The name of the role that grants VM Import/Export permission to export images to your S3 bucket.
     */
    roleName: NonEmptyString;
    /**
     * Export the updated image to one of the following supported disk image formats:    Virtual Hard Disk (VHD) – Compatible with Citrix Xen and Microsoft Hyper-V virtualization products.    Stream-optimized ESX Virtual Machine Disk (VMDK) – Compatible with VMware ESX and VMware vSphere versions 4, 5, and 6.    Raw – Raw format.  
     */
    diskImageFormat: DiskImageFormat;
    /**
     * The S3 bucket in which to store the output disk images for your VM.
     */
    s3Bucket: NonEmptyString;
    /**
     * The Amazon S3 path for the bucket where the output disk images for your VM are stored.
     */
    s3Prefix?: NonEmptyString;
  }
  export interface S3Logs {
    /**
     * The S3 bucket in which to store the logs.
     */
    s3BucketName?: NonEmptyString;
    /**
     * The Amazon S3 path to the bucket where the logs are stored.
     */
    s3KeyPrefix?: NonEmptyString;
  }
  export interface Schedule {
    /**
     * The cron expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition. For information on how to format a cron expression in Image Builder, see Use cron expressions in EC2 Image Builder.
     */
    scheduleExpression?: NonEmptyString;
    /**
     * The timezone that applies to the scheduling expression. For example, "Etc/UTC", "America/Los_Angeles" in the IANA timezone format. If not specified this defaults to UTC.
     */
    timezone?: Timezone;
    /**
     * The condition configures when the pipeline should trigger a new image build. When the pipelineExecutionStartCondition is set to EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE, and you use semantic version filters on the base image or components in your image recipe, EC2 Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to EXPRESSION_MATCH_ONLY, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see CreateComponent in the  EC2 Image Builder API Reference.
     */
    pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
  }
  export type SecurityGroupIds = NonEmptyString[];
  export interface SendWorkflowStepActionRequest {
    /**
     * Uniquely identifies the workflow step that sent the step action.
     */
    stepExecutionId: WorkflowStepExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the image build version to send action for.
     */
    imageBuildVersionArn: ImageBuildVersionArn;
    /**
     * The action for the image creation process to take while a workflow WaitForAction step waits for an asynchronous action to complete.
     */
    action: WorkflowStepActionType;
    /**
     * The reason why this action is sent.
     */
    reason?: NonEmptyString;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface SendWorkflowStepActionResponse {
    /**
     * The workflow step that sent the step action.
     */
    stepExecutionId?: WorkflowStepExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the image build version that received the action request.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
  }
  export type SeverityCountNumber = number;
  export interface SeverityCounts {
    /**
     * The total number of findings across all severity levels for the specified filter.
     */
    all?: SeverityCountNumber;
    /**
     * The number of critical severity findings for the specified filter.
     */
    critical?: SeverityCountNumber;
    /**
     * The number of high severity findings for the specified filter.
     */
    high?: SeverityCountNumber;
    /**
     * The number of medium severity findings for the specified filter.
     */
    medium?: SeverityCountNumber;
  }
  export type SnsTopicArn = string;
  export type SourceLayerHash = string;
  export interface StartImagePipelineExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
     */
    imagePipelineArn: ImagePipelineArn;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface StartImagePipelineExecutionResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the image that the request created.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
  }
  export interface StartResourceStateUpdateRequest {
    /**
     * The ARN of the Image Builder resource that is updated. The state update might also impact associated resources.
     */
    resourceArn: ImageBuildVersionArn;
    /**
     * Indicates the lifecycle action to take for this request.
     */
    state: ResourceState;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role that’s used to update image state.
     */
    executionRole?: RoleNameOrArn;
    /**
     * A list of image resources to update state for.
     */
    includeResources?: ResourceStateUpdateIncludeResources;
    /**
     * Skip action on the image resource and associated resources if specified exclusion rules are met.
     */
    exclusionRules?: ResourceStateUpdateExclusionRules;
    /**
     * The timestamp that indicates when resources are updated by a lifecycle action.
     */
    updateAt?: DateTimeTimestamp;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface StartResourceStateUpdateResponse {
    /**
     * Identifies the lifecycle runtime instance that started the resource state update.
     */
    lifecycleExecutionId?: LifecycleExecutionId;
    /**
     * The requested ARN of the Image Builder resource for the asynchronous update.
     */
    resourceArn?: ImageBuildVersionArn;
  }
  export type StringList = NonEmptyString[];
  export interface SystemsManagerAgent {
    /**
     * Controls whether the Systems Manager agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
     */
    uninstallAfterBuild?: NullableBoolean;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     */
    resourceArn: ImageBuilderArn;
    /**
     * The tags to apply to the resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TargetContainerRepository {
    /**
     * Specifies the service in which this image was registered.
     */
    service: ContainerRepositoryService;
    /**
     * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
     */
    repositoryName: NonEmptyString;
  }
  export type TargetResourceCount = number;
  export type Timezone = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to untag.
     */
    resourceArn: ImageBuilderArn;
    /**
     * The tag keys to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDistributionConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
     */
    distributionConfigurationArn: DistributionConfigurationArn;
    /**
     * The description of the distribution configuration.
     */
    description?: NonEmptyString;
    /**
     * The distributions of the distribution configuration.
     */
    distributions: DistributionList;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface UpdateDistributionConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that was updated by this request.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
  }
  export interface UpdateImagePipelineRequest {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
     */
    imagePipelineArn: ImagePipelineArn;
    /**
     * The description of the image pipeline.
     */
    description?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.
     */
    imageRecipeArn?: ImageRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the container pipeline to update.
     */
    containerRecipeArn?: ContainerRecipeArn;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated.
     */
    distributionConfigurationArn?: DistributionConfigurationArn;
    /**
     * The image test configuration of the image pipeline.
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: NullableBoolean;
    /**
     * The schedule of the image pipeline.
     */
    schedule?: Schedule;
    /**
     * The status of the image pipeline.
     */
    status?: PipelineStatus;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    /**
     * Contains the workflows to run for the pipeline.
     */
    workflows?: WorkflowConfigurationList;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: RoleNameOrArn;
  }
  export interface UpdateImagePipelineResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that was updated by this request.
     */
    imagePipelineArn?: ImagePipelineArn;
  }
  export interface UpdateInfrastructureConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
     */
    infrastructureConfigurationArn: InfrastructureConfigurationArn;
    /**
     * The description of the infrastructure configuration.
     */
    description?: NonEmptyString;
    /**
     * The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.
     */
    instanceTypes?: InstanceTypeList;
    /**
     * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
     */
    instanceProfileName: InstanceProfileNameType;
    /**
     * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
     */
    securityGroupIds?: SecurityGroupIds;
    /**
     * The subnet ID to place the instance used to customize your Amazon EC2 AMI in.
     */
    subnetId?: NonEmptyString;
    /**
     * The logging configuration of the infrastructure configuration.
     */
    logging?: Logging;
    /**
     * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
     */
    keyPair?: NonEmptyString;
    /**
     * The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.
     */
    terminateInstanceOnFailure?: NullableBoolean;
    /**
     * The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.  EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under. 
     */
    snsTopicArn?: SnsTopicArn;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
    /**
     * The tags attached to the resource created by Image Builder.
     */
    resourceTags?: ResourceTagMap;
    /**
     * The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see one of the following links:    Configure the instance metadata options in the  Amazon EC2 User Guide  for Linux instances.    Configure the instance metadata options in the  Amazon EC2 Windows Guide  for Windows instances.  
     */
    instanceMetadataOptions?: InstanceMetadataOptions;
  }
  export interface UpdateInfrastructureConfigurationResponse {
    /**
     * The request ID that uniquely identifies this request.
     */
    requestId?: NonEmptyString;
    /**
     * The client token that uniquely identifies the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by this request.
     */
    infrastructureConfigurationArn?: InfrastructureConfigurationArn;
  }
  export interface UpdateLifecyclePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy resource.
     */
    lifecyclePolicyArn: LifecyclePolicyArn;
    /**
     * Optional description for the lifecycle policy.
     */
    description?: NonEmptyString;
    /**
     * Indicates whether the lifecycle policy resource is enabled.
     */
    status?: LifecyclePolicyStatus;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to update the lifecycle policy.
     */
    executionRole: RoleNameOrArn;
    /**
     * The type of image resource that the lifecycle policy applies to.
     */
    resourceType: LifecyclePolicyResourceType;
    /**
     * The configuration details for a lifecycle policy resource.
     */
    policyDetails: LifecyclePolicyDetails;
    /**
     * Selection criteria for resources that the lifecycle policy applies to.
     */
    resourceSelection: LifecyclePolicyResourceSelection;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference.
     */
    clientToken: ClientToken;
  }
  export interface UpdateLifecyclePolicyResponse {
    /**
     * The ARN of the image lifecycle policy resource that was updated.
     */
    lifecyclePolicyArn?: LifecyclePolicyArn;
  }
  export type Uri = string;
  export type UserDataOverride = string;
  export type VersionNumber = string;
  export type VulnerabilityId = string;
  export interface VulnerabilityIdAggregation {
    /**
     * The vulnerability Id for this set of counts.
     */
    vulnerabilityId?: NonEmptyString;
    /**
     * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified vulnerability.
     */
    severityCounts?: SeverityCounts;
  }
  export type VulnerabilityIdList = VulnerabilityId[];
  export interface VulnerablePackage {
    /**
     * The name of the vulnerable package.
     */
    name?: NonEmptyString;
    /**
     * The version of the vulnerable package.
     */
    version?: NonEmptyString;
    /**
     * The source layer hash of the vulnerable package.
     */
    sourceLayerHash?: SourceLayerHash;
    /**
     * The epoch of the vulnerable package.
     */
    epoch?: PackageEpoch;
    /**
     * The release of the vulnerable package.
     */
    release?: NonEmptyString;
    /**
     * The architecture of the vulnerable package.
     */
    arch?: PackageArchitecture;
    /**
     * The package manager of the vulnerable package.
     */
    packageManager?: NonEmptyString;
    /**
     * The file path of the vulnerable package.
     */
    filePath?: NonEmptyString;
    /**
     * The version of the package that contains the vulnerability fix.
     */
    fixedInVersion?: NonEmptyString;
    /**
     * The code to run in your environment to update packages with a fix available.
     */
    remediation?: NonEmptyString;
  }
  export type VulnerablePackageList = VulnerablePackage[];
  export interface Workflow {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource.
     */
    arn?: WorkflowBuildVersionArn;
    /**
     * The name of the workflow resource.
     */
    name?: ResourceName;
    /**
     * The workflow resource version. Workflow resources are immutable. To make a change, you can clone a workflow or create a new version.
     */
    version?: VersionNumber;
    /**
     * The description of the workflow.
     */
    description?: NonEmptyString;
    /**
     * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
     */
    changeDescription?: NonEmptyString;
    /**
     * Specifies the image creation stage that the workflow applies to. Image Builder currently supports build and test workflows.
     */
    type?: WorkflowType;
    /**
     * Describes the current status of the workflow and the reason for that status.
     */
    state?: WorkflowState;
    /**
     * The owner of the workflow resource.
     */
    owner?: NonEmptyString;
    /**
     * Contains the YAML document content for the workflow.
     */
    data?: WorkflowData;
    /**
     * The KMS key identifier used to encrypt the workflow resource.
     */
    kmsKeyId?: NonEmptyString;
    /**
     * The timestamp when Image Builder created the workflow resource.
     */
    dateCreated?: DateTime;
    /**
     * The tags that apply to the workflow resource
     */
    tags?: TagMap;
    /**
     * An array of input parameters that that the image workflow uses to control actions or configure settings.
     */
    parameters?: WorkflowParameterDetailList;
  }
  export type WorkflowBuildVersionArn = string;
  export interface WorkflowConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource.
     */
    workflowArn: WorkflowVersionArnOrBuildVersionArn;
    /**
     * Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
     */
    parameters?: WorkflowParameterList;
    /**
     * Test workflows are defined within named runtime groups called parallel groups. The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
     */
    parallelGroup?: ParallelGroup;
    /**
     * The action to take if the workflow fails.
     */
    onFailure?: OnWorkflowFailure;
  }
  export type WorkflowConfigurationList = WorkflowConfiguration[];
  export type WorkflowData = string;
  export type WorkflowExecutionId = string;
  export type WorkflowExecutionMessage = string;
  export interface WorkflowExecutionMetadata {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource build version that ran.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
    /**
     * Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a workflow.
     */
    workflowExecutionId?: WorkflowExecutionId;
    /**
     * Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow.
     */
    type?: WorkflowType;
    /**
     * The current runtime status for this workflow.
     */
    status?: WorkflowExecutionStatus;
    /**
     * The runtime output message from the workflow, if applicable.
     */
    message?: WorkflowExecutionMessage;
    /**
     * The total number of steps in the workflow. This should equal the sum of the step counts for steps that succeeded, were skipped, and failed.
     */
    totalStepCount?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps in the workflow that ran successfully.
     */
    totalStepsSucceeded?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps in the workflow that failed.
     */
    totalStepsFailed?: WorkflowStepCount;
    /**
     * A runtime count for the number of steps in the workflow that were skipped.
     */
    totalStepsSkipped?: WorkflowStepCount;
    /**
     * The timestamp when the runtime instance of this workflow started.
     */
    startTime?: DateTime;
    /**
     * The timestamp when this runtime instance of the workflow finished.
     */
    endTime?: DateTime;
    /**
     * The name of the test group that included the test workflow resource at runtime.
     */
    parallelGroup?: ParallelGroup;
  }
  export type WorkflowExecutionStatus = "PENDING"|"SKIPPED"|"RUNNING"|"COMPLETED"|"FAILED"|"ROLLBACK_IN_PROGRESS"|"ROLLBACK_COMPLETED"|"CANCELLED"|string;
  export type WorkflowExecutionsList = WorkflowExecutionMetadata[];
  export type WorkflowNameArn = string;
  export interface WorkflowParameter {
    /**
     * The name of the workflow parameter to set.
     */
    name: WorkflowParameterName;
    /**
     * Sets the value for the named workflow parameter.
     */
    value: WorkflowParameterValueList;
  }
  export type WorkflowParameterDescription = string;
  export interface WorkflowParameterDetail {
    /**
     * The name of this input parameter.
     */
    name: WorkflowParameterName;
    /**
     * The type of input this parameter provides. The currently supported value is "string".
     */
    type: WorkflowParameterType;
    /**
     * The default value of this parameter if no input is provided.
     */
    defaultValue?: WorkflowParameterValueList;
    /**
     * Describes this parameter.
     */
    description?: WorkflowParameterDescription;
  }
  export type WorkflowParameterDetailList = WorkflowParameterDetail[];
  export type WorkflowParameterList = WorkflowParameter[];
  export type WorkflowParameterName = string;
  export type WorkflowParameterType = string;
  export type WorkflowParameterValue = string;
  export type WorkflowParameterValueList = WorkflowParameterValue[];
  export interface WorkflowState {
    /**
     * The current state of the workflow.
     */
    status?: WorkflowStatus;
    /**
     * Describes how or why the workflow changed state.
     */
    reason?: NonEmptyString;
  }
  export type WorkflowStatus = "DEPRECATED"|string;
  export type WorkflowStepAction = string;
  export type WorkflowStepActionType = "RESUME"|"STOP"|string;
  export type WorkflowStepCount = number;
  export type WorkflowStepDescription = string;
  export interface WorkflowStepExecution {
    /**
     * Uniquely identifies the workflow step that ran for the associated image build version.
     */
    stepExecutionId?: WorkflowStepExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the image build version that ran the workflow.
     */
    imageBuildVersionArn?: ImageBuildVersionArn;
    /**
     * Uniquely identifies the runtime instance of the workflow that contains the workflow step that ran for the associated image build version.
     */
    workflowExecutionId?: WorkflowExecutionId;
    /**
     * The ARN of the workflow resource that ran.
     */
    workflowBuildVersionArn?: WorkflowBuildVersionArn;
    /**
     * The name of the workflow step.
     */
    name?: WorkflowStepName;
    /**
     * The name of the step action.
     */
    action?: WorkflowStepAction;
    /**
     * The timestamp when the workflow step started.
     */
    startTime?: DateTime;
  }
  export type WorkflowStepExecutionId = string;
  export type WorkflowStepExecutionList = WorkflowStepExecution[];
  export type WorkflowStepExecutionRollbackStatus = "RUNNING"|"COMPLETED"|"SKIPPED"|"FAILED"|string;
  export type WorkflowStepExecutionStatus = "PENDING"|"SKIPPED"|"RUNNING"|"COMPLETED"|"FAILED"|"CANCELLED"|string;
  export type WorkflowStepExecutionsList = WorkflowStepMetadata[];
  export type WorkflowStepInputs = string;
  export type WorkflowStepMessage = string;
  export interface WorkflowStepMetadata {
    /**
     * A unique identifier for the workflow step, assigned at runtime.
     */
    stepExecutionId?: WorkflowStepExecutionId;
    /**
     * The name of the workflow step.
     */
    name?: WorkflowStepName;
    /**
     * Description of the workflow step.
     */
    description?: WorkflowStepDescription;
    /**
     * The step action name.
     */
    action?: WorkflowStepAction;
    /**
     * Runtime status for the workflow step.
     */
    status?: WorkflowStepExecutionStatus;
    /**
     * Reports on the rollback status of the step, if applicable.
     */
    rollbackStatus?: WorkflowStepExecutionRollbackStatus;
    /**
     * Detailed output message that the workflow step provides at runtime.
     */
    message?: WorkflowStepMessage;
    /**
     * Input parameters that Image Builder provides for the workflow step.
     */
    inputs?: WorkflowStepInputs;
    /**
     * The file names that the workflow step created as output for this runtime instance of the workflow.
     */
    outputs?: WorkflowStepOutputs;
    /**
     * The timestamp when the workflow step started.
     */
    startTime?: DateTime;
    /**
     * The timestamp when the workflow step finished.
     */
    endTime?: DateTime;
  }
  export type WorkflowStepName = string;
  export type WorkflowStepOutputs = string;
  export type WorkflowStepTimeoutSecondsInteger = number;
  export interface WorkflowSummary {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource.
     */
    arn?: WorkflowNameArn;
    /**
     * The name of the workflow.
     */
    name?: ResourceName;
    /**
     * The version of the workflow.
     */
    version?: VersionNumber;
    /**
     * Describes the workflow.
     */
    description?: NonEmptyString;
    /**
     * The change description for the current version of the workflow resource.
     */
    changeDescription?: NonEmptyString;
    /**
     * The image creation stage that this workflow applies to. Image Builder currently supports build and test stage workflows.
     */
    type?: WorkflowType;
    /**
     * The owner of the workflow resource.
     */
    owner?: NonEmptyString;
    /**
     * Describes the current state of the workflow resource.
     */
    state?: WorkflowState;
    /**
     * The original creation date of the workflow resource.
     */
    dateCreated?: DateTime;
    /**
     * Contains a list of tags that are defined for the workflow.
     */
    tags?: TagMap;
  }
  export type WorkflowSummaryList = WorkflowSummary[];
  export type WorkflowType = "BUILD"|"TEST"|"DISTRIBUTION"|string;
  export interface WorkflowVersion {
    /**
     * The Amazon Resource Name (ARN) of the workflow resource.
     */
    arn?: WorkflowVersionArn;
    /**
     * The name of the workflow.
     */
    name?: ResourceName;
    /**
     * The semantic version of the workflow resource. The format includes three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;.
     */
    version?: VersionNumber;
    /**
     * Describes the workflow.
     */
    description?: NonEmptyString;
    /**
     * The image creation stage that this workflow applies to. Image Builder currently supports build and test stage workflows.
     */
    type?: WorkflowType;
    /**
     * The owner of the workflow resource.
     */
    owner?: NonEmptyString;
    /**
     * The timestamp when Image Builder created the workflow version.
     */
    dateCreated?: DateTime;
  }
  export type WorkflowVersionArn = string;
  export type WorkflowVersionArnOrBuildVersionArn = string;
  export type WorkflowVersionList = WorkflowVersion[];
  export type WorkflowWildcardVersionArn = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-12-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Imagebuilder client.
   */
  export import Types = Imagebuilder;
}
export = Imagebuilder;
