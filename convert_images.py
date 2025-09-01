from PIL import Image
import pillow_heif
import os

def convert_image(source_path, target_path):
    try:
        if source_path.lower().endswith(".heic"):
            heif_file = pillow_heif.read_heif(source_path)
            image = Image.frombytes(
                heif_file.mode,
                heif_file.size,
                heif_file.data,
                "raw",
            )
        else:
            image = Image.open(source_path)

        image.save(target_path, format="webp")
        print(f"Successfully converted {source_path} to {target_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")

if __name__ == "__main__":
    images_to_convert = [
        "Album_BackCover.heic",
        "Album_Front_Cover.heic",
        "RATHER_Be_Alive_Cover.heic",
        "SLUT_TALK_COVER.JPEG",
        "blurr_tour.jpeg",
        "Itunes_Placement_Photo.jpg",
        "Spotify_Placement_Photo.jpg",
        "YOUTUBE_Placement_Photo.jpg",
        "AIMC_Capsule_Photo.png",
        "MADDOG_Capsule_Photo.png",
        "MADDOG_Cover.png",
        "UPTIGHT_Cover.png",
    ]

    for image_name in images_to_convert:
        base_name, _ = os.path.splitext(image_name)
        target_name = f"{base_name}.webp"
        convert_image(image_name, target_name)