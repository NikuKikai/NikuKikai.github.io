import numpy as np
import cv2
from pathlib import Path
import math
import os


folder = 'D:/Pictures/Draw/Comics/O/OutputRaw_jp'
save_folder = 'D:/temp'
target_height = 1200

sharpen_size = 3
sharpen_strength = 0.5


def resize(src, target_height):
    # # blur
    # k = math.floor(src.shape[0] / target_height * 2)
    # blur = cv2.GaussianBlur(src, ksize=(k, k), sigmaX=0)

    # resize
    resized = cv2.resize(src, (round(target_height / src.shape[0] * src.shape[1]), target_height), interpolation=cv2.INTER_AREA)

    # # unsharp
    # sharp = cv2.addWeighted(
    #     resized, 1 + sharpen_strength,
    #     cv2.GaussianBlur(resized, (sharpen_size, sharpen_size), 0), -sharpen_strength,
    #     gamma=0
    # )

    # res = cv2.threshold(resized, 128, 255)
    return resized


def split(src: np.ndarray):
    h, w, c = src.shape
    return src[:, :w // 2, :], src[:, w // 2:, :]


def add_solid_bg(src: np.ndarray, rgb: tuple):
    if src.shape[2] != 4:
        return src.copy()
    a = src[:, :, 3:]
    bg = np.zeros_like(src)
    bg[:, :, 0] = rgb[2]
    bg[:, :, 1] = rgb[1]
    bg[:, :, 2] = rgb[0]

    k = a / 255.
    res = src * k + bg * (1 - k)
    res[:, :, 3] = 255
    return res.astype(np.uint8)


# # for SNS post: resize and add solid BG
# for file in Path(folder).glob('*.png'):
#     src = cv2.imread(str(file.absolute()), cv2.IMREAD_UNCHANGED)

#     res = resize(src, target_height)
#     res = add_solid_bg(res, (32, 32, 32))

#     cv2.imwrite(os.path.join(save_folder, file.name), res, [cv2.IMWRITE_PNG_COMPRESSION, 9])


# for Github pages: resize and split (keep transparency)
for file in Path(folder).glob('*.png'):
    src = cv2.imread(str(file.absolute()), cv2.IMREAD_UNCHANGED)

    res = resize(src, target_height)
    left, right = split(res)

    name_left = os.path.join(save_folder, file.stem + '_2' + file.suffix)
    name_right = os.path.join(save_folder, file.stem + '_1' + file.suffix)
    cv2.imwrite(name_left, left, [cv2.IMWRITE_PNG_COMPRESSION, 9])
    cv2.imwrite(name_right, right, [cv2.IMWRITE_PNG_COMPRESSION, 9])
